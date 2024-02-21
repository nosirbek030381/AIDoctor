import { About, Begin, Contact, Footer, MainSection, Manual, Navbar } from './components';

const App = () => {
	return (
		<div>
			<Navbar />
			<MainSection />
			<Begin />
			<Manual />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
