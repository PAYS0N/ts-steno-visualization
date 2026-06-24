type NextFeatures = {
	revealedKeys: Array<number>;
}

const revealedFeatures: Map<string, NextFeatures> = new Map()

revealedFeatures.set('function', {revealedKeys: [2,3,4,6,8,16,17,19,21]})
revealedFeatures.set('for-loop', {revealedKeys: [2,3,4,6,8,14,15]})
revealedFeatures.set('starter', {revealedKeys: [2,3,4,6,8]})

function getRevealed(feature: string): Array<number> {
	let features = revealedFeatures.get(feature)
	if(features === undefined) {
		throw new Error('tried to reveal nonexistent feature')
	}
	else {
		return features.revealedKeys
	}
}

export default getRevealed;
