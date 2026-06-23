import './Feature.css'

interface FeatureProp{
	label: string;
	forRadio: string;
}

function Feature({label, forRadio}: FeatureProp): React.ReactElement {
	return (
		<label className="feature">
			<input type="radio" value={label} name={forRadio} />
			<span>{label}</span>
		</label>
	)
}

export default Feature;
