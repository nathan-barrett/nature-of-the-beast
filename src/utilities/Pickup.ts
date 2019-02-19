import BaseUtility, { RunParams } from './BaseUtility';
import store, { ActionTypes, getCurrentLocation } from '../store';
import ItemManifest from '../nouns/ItemManifest';

export default class Pickup extends BaseUtility {
	run({ args, writeToConsole }: RunParams): Promise<null> {
		const item = args[0];

		if (
			ItemManifest[item] &&
			getCurrentLocation().itemSlugs.indexOf(item) > -1
		) {
			getCurrentLocation().itemSlugs = getCurrentLocation().itemSlugs.filter(
				itemSlug => itemSlug !== item
			);

			store.dispatch({
				type: ActionTypes.ADD_TO_INVENTORY,
				value: item
			});

			writeToConsole({ item: `I have picked up the ${item}` });
		} else {
			writeToConsole({ item: `There is no ${item} here` });
		}

		return Promise.resolve(null);
	}

	command = 'pickup';
	helpDescription =
		'pickup will allow you to add an object to your inventory';
}
