import './StenoKey.css'

interface KeyProp extends React.HTMLAttributes<HTMLDivElement>{
	label: string;
}

function StenoKey({label}: KeyProp): React.ReactElement {
	return (
		<div className="steno-key">{label}</div>
	)
}

export default StenoKey;
