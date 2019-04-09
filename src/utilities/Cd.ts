import BaseUtility, { PrivateRunParams } from './BaseUtility';
import store, { ActionTypes, getCurrentLocation } from '../store';
import LocationManifest from '../nouns/LocationManifest';

const INVALID_LOCATION = 'INVALID_LOCATION';

export default class Cd extends BaseUtility {
	private goToPreviousLocation() {
		const newLocation = store.getState().previousLocationStack[0];

		store.dispatch({
			type: ActionTypes.POP_LOCATION_STACK
		});

		if (newLocation) {
			store.dispatch({
				type: ActionTypes.SET_LOCATION,
				value: newLocation
			});
		}
	}

	private goToLocation = (location: string) => {
		if (location === '..') {
			this.goToPreviousLocation();
			return;
		}

		const newLocation = getCurrentLocation().neighborSlugs.find(
			(slug: string) => slug === location
		);

		if (!newLocation) {
			throw {
				code: INVALID_LOCATION,
				message: `${location} is an invalid location`
			};
		}

		store.dispatch({
			type: ActionTypes.PUSH_LOCATION_STACK,
			value: store.getState().location
		});

		store.dispatch({
			type: ActionTypes.SET_LOCATION,
			value: newLocation
		});
	};

	_run({ args, output }: PrivateRunParams): Promise<null> {
		const {
			location: initialLocation,
			previousLocationStack: initialStack
		} = store.getState();

		try {
			args[0].split('/').forEach(this.goToLocation);
		} catch (e) {
			if (e.code === INVALID_LOCATION) {
				output({ content: e.message });

				store.dispatch({
					type: ActionTypes.SET_LOCATION,
					value: initialLocation
				});

				store.dispatch({
					type: ActionTypes.SET_LOCATION_STACK,
					value: initialStack
				});
			} else {
				throw e;
			}
		}

		setUrlLocation({
			location: store.getState().location
		});

		return Promise.resolve(null);
	}

	getTabCompleteOptions = (path: string): string[] => {
		const locations = path.split('/');

		const locationChain = locations.splice(0, locations.length - 1);
		const finalFragment = locations[locations.length - 1];

		if (locationChain.length === 0) {
			return getCurrentLocation().neighborSlugs;
		}

		if (this.locationChainValid(locationChain)) {
			const finalLocationInChain =
				LocationManifest[locationChain[locationChain.length - 1]];

			const options = finalLocationInChain.neighborSlugs.filter(
				(slug: string) => slug.indexOf(finalFragment) === 0
			);

			if (options.length === 1) {
				return [`${locationChain.join('/')}/${options[0]}`];
			}

			return options;
		}

		return [];
	};

	private locationChainValid = (locations: string[]): boolean => {
		if (locations.length === 0) {
			return true;
		}

		// for some reason TS won't let me return the result of this reduce directly
		const valid = locations.reduce((memo, location, i, arr) => {
			if (i === 0) {
				return true;
			}

			if (!memo) {
				return false;
			}

			const prevLocation = LocationManifest[arr[i - 1]];

			return prevLocation.neighborSlugs.indexOf(location) >= 0;
		}, true);

		return valid;
	};

	command = 'cd';
	helpDescription =
		'Use cd to move to a new location. For example:\n\ncd a_cold_cabin';
}

export function setUrlLocation({ location }: { location: string }): void {
	window.location.hash = location;
}
