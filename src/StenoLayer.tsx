import FeatureSelection from './FeatureSelection.tsx'
import StenoKeyboard from './StenoKeyboard.tsx'
import getRevealedFeatures from './assets/featureMaps.ts'

type layerProp = {
	startState: string,
	allowedStates: string[]
}

function StenoLayer({startState, allowedStates}: layerProp): React.ReactElement {
	const [strokeClass, setStroke] = useState(startState)
	let nextFeatures = getRevealedFeatures(strokeClass)
	let revealedKeys: Array<number> = nextFeatures.revealedKeys
	let nextSelections: Array<Array<string>> = []
	if(nextFeatures.nextChoices !== undefined) {
		nextSelections = nextFeatures.nextChoices.selections
	}
	
	
	return(
		<div className="steno-layer">
			<FeatureSelection handleClick={setStroke} selections={allowedStates}/>
			<StenoKeyboard keysSelected={revealedKeys}/>
		</div>
	)
}

export default StenoLayer;
