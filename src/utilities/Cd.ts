import BaseUtility, { PrivateRunParams } from './BaseUtility';
import { ActionTypes, RootState } from '../store';
import LocationManifest from '../nouns/LocationManifest';

export default class Cd extends BaseUtility {
	protected _run({
		args,
		output,
		dispatch
	}: PrivateRunParams): Promise<null> {
		const locationChain = args[0].split('/').filter(l => l);

		if (this.locationChainValid(locationChain)) {
			const finalLocation = locationChain[locationChain.length - 1];

			dispatch({
				type: ActionTypes.SET_LOCATION,
				value: finalLocation
			});

			setUrlLocation({
				location: finalLocation
			});
		} else {
			output({ content: 'invalid location' });
		}

		return Promise.resolve(null);
	}

	getTabCompleteOptions = (
		{ location }: RootState,
		path: string
	): string[] => {
		const locations = path.split('/');

		const locationChain = locations.splice(0, locations.length - 1);
		const finalFragment = locations[locations.length - 1];

		if (!this.locationChainValid(locationChain)) {
			return [];
		}

		const finalLocationInChain =
			locationChain.length === 0
				? LocationManifest[location]
				: LocationManifest[locationChain[locationChain.length - 1]];

		if (!finalLocationInChain) {
			return [];
		}

		const options = finalLocationInChain.neighborSlugs.filter(
			(slug: string) => slug.indexOf(finalFragment) === 0
		);

		if (options.length === 1) {
			const path =
				locationChain.length === 0 ? '' : `${locationChain.join('/')}/`;
			return [`${path}${options[0]}/`];
		}

		return options;
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

			return prevLocation.hasNeighbor(location);
		}, true);

		return valid;
	};

	command = 'goto';
	aliases = ['cd', 'go', 'g'];
	helpDescription =
		'Use goto to move to a new location. For example:\n\n goto a_cold_cabin';
}

export function setUrlLocation({ location }: { location: string }): void {
	window.location.hash = location;
}
