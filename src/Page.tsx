import StenoKeyboard from './StenoKeyboard.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import FeatureSelection from './FeatureSelection.tsx'
import './Page.css'

function Page(): React.ReactElement {
	return (
		<div className="page">
			<Header/>
			<main className="main">
				<FeatureSelection/>
				<StenoKeyboard/>
			</main>
			<Footer/>
		</div>
	)
}

export default Page;
