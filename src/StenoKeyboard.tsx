import "./StenoKeyboard.css";
import StenoKey from "./StenoKey.tsx"

function StenoKeyboard(): React.ReactElement {
	return (
		<div className="steno-keyboard">
			<div className="left-keys">
				<StenoKey label="#"/>
				<StenoKey label="S"/>
				<StenoKey label="T"/>
				<StenoKey label="K"/>
				<StenoKey label="P"/>
				<StenoKey label="W"/>
				<StenoKey label="H"/>
				<StenoKey label="R"/>
			</div>
			<StenoKey className="asterisk-key" label="*"/>
			<div className="right-keys">
				<StenoKey label="F"/>
				<StenoKey label="R"/>
				<StenoKey label="P"/>
				<StenoKey label="B"/>
				<StenoKey label="L"/>
				<StenoKey label="G"/>
				<StenoKey label="T"/>
				<StenoKey label="S"/>
				<StenoKey label="D"/>
				<StenoKey label="Z"/>
			</div>
		</div>	
	)
}

export default StenoKeyboard;
