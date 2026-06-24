import {useState} from 'react'

import StenoKeyboard from './StenoKeyboard.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import FeatureSelection from './FeatureSelection.tsx'
import getRevealedKeys from './assets/featureMaps.ts'
import './Page.css'

function Page(): React.ReactElement {
	const [strokeClass, setStroke] = useState('starter')
	function setStrokeToFeatureClicked(featureSelected: string): void {
		setStroke(featureSelected)
	}
	return (
		<div className="page">
			<Header/>
			<main className="main">
				<FeatureSelection handleClick={setStrokeToFeatureClicked}/>
				<StenoKeyboard keysSelected={getRevealedKeys(strokeClass)}/>
			</main>
			<Footer/>
		</div>
	)
}

export default Page;
