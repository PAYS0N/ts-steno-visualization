export type Selection = {
	options: Array<string>,
	newStroke: boolean,
}

type NextFeatures = {
	revealedKeys: Array<number>;
	nextSelections?: Array<Selection>;
}

const revealedFeatures: Map<string, NextFeatures> = new Map()
const tsTypes: Array<string> = ["string", "boolean", "number", "map", "set"]

revealedFeatures.set('function', {
	revealedKeys: [2,3,4,6,8,16,17,19,21],
	nextSelections: [
		{ options: ["new-line", "no-new-line"], newStroke: false},
		{ options: tsTypes, newStroke: true },
		{ options: ["fn-default", "fn-arrow", "fn-async", "fn-yieldable", "fn-iife"], newStroke: false },
	]
})
revealedFeatures.set('for-loop', {
	revealedKeys: [2,3,4,6,8,14,15],
	nextSelections: [
		{ options: ["fr-neg", "fr-empty", "fr-default", "fr-of", "fr-in"], newStroke: false },
	]
})
revealedFeatures.set('starter', {
	revealedKeys: [2,3,4,6,8]
})
revealedFeatures.set('string', {
	revealedKeys: [2,3,8]
})
revealedFeatures.set('boolean', {
	revealedKeys: [5,6]
})
revealedFeatures.set('number', {
	revealedKeys: [3,5,7]
})
revealedFeatures.set('map', {
	revealedKeys: [5,7],
	nextSelections: [
		{ options: ["string", "boolean", "number"], newStroke: true },
		{ options: ["string", "boolean", "number"], newStroke: true },
	]
})
revealedFeatures.set('set', {
	revealedKeys: [2,3],
	nextSelections: [
		{ options: ["string", "boolean", "number"], newStroke: true },
	]
})
revealedFeatures.set('fn-default', {
	revealedKeys: [14,18,20]
})
revealedFeatures.set('fn-arrow', {
	revealedKeys: [15]
})
revealedFeatures.set('fn-async', {
	revealedKeys: [16,17]
})
revealedFeatures.set('fn-yieldable', {
	revealedKeys: [22]
})
revealedFeatures.set('fn-iife', {
	revealedKeys: [14]
})
revealedFeatures.set('fr-neg', {
	revealedKeys: [16,17]
})
revealedFeatures.set('fr-empty', {
	revealedKeys: [16,18,20]
})
revealedFeatures.set('fr-default', {
	revealedKeys: []
})
revealedFeatures.set('fr-of', {
	revealedKeys: [22]
})
revealedFeatures.set('fr-in', {
	revealedKeys: [23]
})
revealedFeatures.set('new-line', {
	revealedKeys: []
})
revealedFeatures.set('no-new-line', {
	revealedKeys: [13]
})

function getRevealed(feature: string): NextFeatures {
	const features = revealedFeatures.get(feature)
	if(features === undefined) {
		throw new Error('tried to reveal nonexistent feature')
	}
	else {
		return features	
	}
}

export default getRevealed;
