import Feature from "./Feature.tsx"
import "./FeatureSelection.css"

function FeatureSelection(): React.ReactElement {
	return (
		<div className="feature-selection">
			<Feature forRadio="first-stroke" label="function"/>
			<Feature forRadio="first-stroke" label="for loop"/>
		</div>
	)
}

export default FeatureSelection;
