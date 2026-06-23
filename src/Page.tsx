import StenoKeyboard from './StenoKeyboard.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './Page.css'

function Page(): React.ReactElement {
	return (
		<div className="page">
			<Header/>
			<main>
				<StenoKeyboard/>
			</main>
			<Footer/>
		</div>
	)
}

export default Page;
