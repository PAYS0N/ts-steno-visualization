import { useState } from 'react'

import FeatureSelection from './FeatureSelection.tsx'
import StenoKeyboard from './StenoKeyboard.tsx'
import getRevealedFeatures from './assets/featureMaps.ts'
import type { Selection } from './assets/featureMaps.ts'

import './StenoLayer.css'

type layerProp = {
	base?: string,
	root: Selection[]
}

type Stroke = {
	keys: Array<number>,
	selections: Array<React.ReactElement>,
}

function StenoLayer({base, root}: layerProp): React.ReactElement {
	const [chosen, setChosen] = useState<Record<string, string>>({})

	function pick(groupKey: string, label: string): void {
		setChosen({...chosen, [groupKey]: label})
	}

	// The chosen path is flattened into an ordered list of strokes (keyboards).
	const strokes: Array<Stroke> = [{ keys: base ? [...getRevealedFeatures(base).revealedKeys] : [], selections: [] }]

	function walk(selections: Selection[], parentStroke: Stroke, path: string): void {
		// A no-new-stroke selection appends to the most recent stroke at this level,
		// which is either the inherited parent or a sibling's new stroke.
		let current = parentStroke
		for(const [index, selection] of selections.entries()) {
			let target: Stroke
			if(selection.newStroke) {
				target = { keys: [], selections: [] }
				strokes.push(target)
				current = target
			}
			else {
				target = current
			}

			// Key by position in the chosen path so identical option lists stay independent.
			const groupKey = `${path}.${index}`
			target.selections.push(
				<FeatureSelection
					key={groupKey}
					name={groupKey}
					selections={selection.options}
					handleClick={(label: string) => pick(groupKey, label)}
				/>
			)

			const selected = chosen[groupKey]
			if(selected === undefined) {
				continue
			}

			const features = getRevealedFeatures(selected)
			for(const key of features.revealedKeys) {
				target.keys.push(key)
			}
			if(features.nextSelections !== undefined) {
				walk(features.nextSelections, target, `${groupKey}:${selected}`)
			}
		}
	}

	walk(root, strokes[0], 'root')

	return(
		<div className="steno-layer">
			{strokes.map((stroke, index) => (
				<div className="steno-stroke" key={index}>
					{stroke.selections}
					<StenoKeyboard keysSelected={stroke.keys}/>
				</div>
			))}
		</div>
	)
}

export default StenoLayer;
