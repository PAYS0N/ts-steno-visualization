import './StenoKey.css'

interface KeyProp{
	label: string;
	className?: string;
}

function StenoKey({label, className = ""}: KeyProp): React.ReactElement {
	return (
		<div className={className + " " + "steno-key"}>{label}</div>
	)
}

export default StenoKey;
