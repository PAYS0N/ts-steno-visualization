import './StenoKey.css'

interface KeyProp{
	label: string;
	selected: boolean;
	className?: string;
}

function StenoKey({label, selected, className = ""}: KeyProp): React.ReactElement {
	let classSelected: string = ""
	if(selected) {
		classSelected = "selected"
	}
	return (
		<div className={className + " " + "steno-key" + " " + classSelected}>{label}</div>
	)
}

export default StenoKey;
