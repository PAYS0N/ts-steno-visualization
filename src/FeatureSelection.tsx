import Feature from "./Feature.tsx"
import "./FeatureSelection.css"

type selectionProp = {
	handleClick: Function;
}

function FeatureSelection({handleClick}: selectionProp): React.ReactElement {
	return (
		<div className="feature-selection">
			<Feature forRadio="first-stroke" label="function" handleClick={handleClick}/>
			<Feature forRadio="first-stroke" label="for-loop" handleClick={handleClick}/>
		</div>
	)
}

export default FeatureSelection;
