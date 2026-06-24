import Feature from "./Feature.tsx"
import "./FeatureSelection.css"

type selectionProp = {
	handleClick: (label: string) => void;
	selections: string[];
	name: string;
}

function FeatureSelection({handleClick, selections, name}: selectionProp): React.ReactElement {
	return (
		<div className="feature-selection">
			{selections.map((label) => (
				<Feature key={label} forRadio={name} label={label} handleClick={handleClick}/>
			))}
		</div>
	)
}

export default FeatureSelection;
