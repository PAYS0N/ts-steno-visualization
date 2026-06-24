import './Feature.css'

interface FeatureProp{
	label: string;
	forRadio: string;
	handleClick: Function;
}

function Feature({label, handleClick, forRadio}: FeatureProp): React.ReactElement {
	return (
		<label className="feature">
			<input type="radio" onClick={() => handleClick(label)} value={label} name={forRadio} />
			<span>{label}</span>
		</label>
	)
}

export default Feature;
