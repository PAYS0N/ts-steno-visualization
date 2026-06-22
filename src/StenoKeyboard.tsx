function StenoKeyboard(): React.ReactElement {
	return (
		<>
			<div className="left-keys">
				<div key="1">#</div>
				<div key="2">S</div>
				<div key="3">T</div>
				<div key="4">K</div>
				<div key="5">P</div>
				<div key="6">W</div>
				<div key="7">H</div>
				<div key="8">R</div>
			</div>
			<div key="9">*</div>
			<div key="10">*</div>
			<div key="11">*</div>
			<div key="12">*</div>
			<div className="right-keys">
				<div key="13">F</div>
				<div key="14">R</div>
				<div key="15">P</div>
				<div key="16">B</div>
				<div key="17">L</div>
				<div key="18">G</div>
				<div key="19">T</div>
				<div key="20">S</div>
				<div key="21">D</div>
				<div key="22">Z</div>
			</div>
		</>
	)
}

export default StenoKeyboard;
