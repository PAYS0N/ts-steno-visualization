import Feature from "./Feature.tsx"
import "./FeatureSelection.css"

function FeatureSelection(): React.ReactElement {
	return (
		<div className="feature-selection">
			<Feature label="function"/>
			<Feature label="for loop"/>
		</div>
	)
}

export default FeatureSelection;
