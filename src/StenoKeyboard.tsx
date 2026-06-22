import "./StenoKeyboard.css";

function StenoKeyboard(): React.ReactElement {
	return (
		<div className="board">
			<div className="left-keys">
				<div className="steno-key">#</div>
				<div className="steno-key">S</div>
				<div className="steno-key">T</div>
				<div className="steno-key">K</div>
				<div className="steno-key">P</div>
				<div className="steno-key">W</div>
				<div className="steno-key">H</div>
				<div className="steno-key">R</div>
			</div>
			<div className="steno-key">*</div>
			<div className="right-keys">
				<div className="steno-key">F</div>
				<div className="steno-key">R</div>
				<div className="steno-key">P</div>
				<div className="steno-key">B</div>
				<div className="steno-key">L</div>
				<div className="steno-key">G</div>
				<div className="steno-key">T</div>
				<div className="steno-key">S</div>
				<div className="steno-key">D</div>
				<div className="steno-key">Z</div>
			</div>
		</div>
	)
}

export default StenoKeyboard;
