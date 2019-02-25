import BaseUtility, { RunParams } from './BaseUtility';
import { getCurrentLocation } from '../store';
import ItemManifest from '../nouns/ItemManifest';

export default class Look extends BaseUtility {
	run({ writeToConsole, args }: RunParams): Promise<null> {
		if (args.length > 0 && !(args[0] === 'at' && ItemManifest[args[1]])) {
			return writeToConsole({
				item: `invalid ${this.command} argument ${args.join(' ')}.`
			});
		}

		let descriptions: string[];

		if (args[0] === 'at' && ItemManifest[args[1]]) {
			descriptions = ItemManifest[args[1]].descriptions;
		} else {
			descriptions = getCurrentLocation().descriptions;
		}

		return descriptions.reduce(
			(memo: Promise<null>, text: string): Promise<null> =>
				memo.then(() => writeToConsole({ item: text, speak: true })),
			Promise.resolve(null)
		);
	}

	command = 'look';
	helpDescription =
		'Use look to take some time, to see where you are. Some things take longer to see than others.';
}