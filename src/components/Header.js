import React from "react"

function Header({ onChangeMode, onDarkModeClick }) {
	function onButtonClick() {
		onDarkModeClick()
	}
	return (
		<header>
			<h2>Shopster</h2>
			<button onClick={onButtonClick}>{onChangeMode ? "Dark" : "Light"} Mode</button>
		</header>
	)
}

export default Header
