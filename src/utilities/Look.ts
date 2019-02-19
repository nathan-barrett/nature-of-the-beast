import BaseUtility, { RunParams } from './BaseUtility';
import { getCurrentLocation } from '../store';
import ItemManifest from '../nouns/ItemManifest';

export default class Look extends BaseUtility {
	run({ writeToConsole, args }: RunParams): Promise<null> {
		if (args[0] === 'at' && ItemManifest[args[1]]) {
			writeToConsole({ item: ItemManifest[args[1]].description });

			return Promise.resolve(null);
		}

		if (args.length > 0) {
			writeToConsole({
				item: `invalid ${this.command} argument ${args.join(' ')}.`
			});

			return Promise.resolve(null);
		}

		return new Promise(resolve => {
			let timeAccumulator = 0;

			const descriptions = getCurrentLocation().descriptions;

			descriptions.forEach((description, i) => {
				timeAccumulator +=
					typeof description.timer === 'undefined'
						? 1500
						: description.timer;

				window.setTimeout(() => {
					writeToConsole({ item: description.text });

					if (i === descriptions.length - 1) {
						resolve();
					}
				}, timeAccumulator);
			});
		});
	}

	command = 'look';
	helpDescription =
		'Use look to take some time, to see where you are. Some things take longer to see than others.';
}
