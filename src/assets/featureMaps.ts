type NextChoices = {
	selections: Array<Array<string>>,
	newStroke: boolean,
}

type NextFeatures = {
	revealedKeys: Array<number>;
	nextChoices?: NextChoices;
}

const revealedFeatures: Map<string, NextFeatures> = new Map()
const tsTypes: Array<string> = ["string", "boolean", "number"]

revealedFeatures.set('function', {
	revealedKeys: [2,3,4,6,8,16,17,19,21],
	nextChoices: {
		selections: [tsTypes, ["fn-default", "fn-arrow", "fn-async", "fn-yieldable", "fn-iife"]],
		newStroke: true
	}
})
revealedFeatures.set('for-loop', {
	revealedKeys: [2,3,4,6,8,14,15]
})
revealedFeatures.set('starter', {
	revealedKeys: [2,3,4,6,8]
})

function getRevealed(feature: string): NextFeatures {
	let features = revealedFeatures.get(feature)
	if(features === undefined) {
		throw new Error('tried to reveal nonexistent feature')
	}
	else {
		return features	
	}
}

export default getRevealed;
