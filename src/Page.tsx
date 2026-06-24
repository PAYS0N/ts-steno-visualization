import StenoLayer from './StenoLayer.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './Page.css'

function Page(): React.ReactElement {
	return (
		<div className="page">
			<Header/>
			<main className="main">
				<StenoLayer base='starter' root={[{options: ['function', 'for-loop'], newStroke: false}]}/>
			</main>
			<Footer/>
		</div>
	)
}

export default Page;
