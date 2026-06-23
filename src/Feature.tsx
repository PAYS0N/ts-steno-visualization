import './Feature.css'

interface FeatureProp{
	label: string;
}

function Feature({label}: FeatureProp): React.ReactElement {
	return (
		<div className="feature">{label}</div>
	)
}

export default Feature;
