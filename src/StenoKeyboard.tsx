import "./StenoKeyboard.css";
import StenoKey from "./StenoKey.tsx"

type KeyboardProp = {
	keysSelected: Array<number>;
}

function StenoKeyboard({keysSelected: keysSelected}: KeyboardProp ): React.ReactElement {
	return (
		<div className="steno-keyboard">
			<div className="left-keys">
				<StenoKey selected={keysSelected.includes(1)} label="#"/>
				<StenoKey selected={keysSelected.includes(2)} label="S"/>
				<StenoKey selected={keysSelected.includes(3)} label="T"/>
				<StenoKey selected={keysSelected.includes(4)} label="K"/>
				<StenoKey selected={keysSelected.includes(5)} label="P"/>
				<StenoKey selected={keysSelected.includes(6)} label="W"/>
				<StenoKey selected={keysSelected.includes(7)} label="H"/>
				<StenoKey selected={keysSelected.includes(8)} label="R"/>
			</div>
			<StenoKey selected={keysSelected.includes(11)} className="asterisk-key" label="*"/>
			<div className="right-keys">
				<StenoKey selected={keysSelected.includes(14)} label="F"/>
				<StenoKey selected={keysSelected.includes(15)} label="R"/>
				<StenoKey selected={keysSelected.includes(16)} label="P"/>
				<StenoKey selected={keysSelected.includes(17)} label="B"/>
				<StenoKey selected={keysSelected.includes(18)} label="L"/>
				<StenoKey selected={keysSelected.includes(19)} label="G"/>
				<StenoKey selected={keysSelected.includes(20)} label="T"/>
				<StenoKey selected={keysSelected.includes(21)} label="S"/>
				<StenoKey selected={keysSelected.includes(22)} label="D"/>
				<StenoKey selected={keysSelected.includes(23)} label="Z"/>
			</div>
		</div>	
	)
}

export default StenoKeyboard;
