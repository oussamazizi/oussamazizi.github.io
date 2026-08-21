import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#travaux">
        Aller au contenu
      </a>

      <Header />

      <main>
        <Hero />
        <Work />
        <Experience />
        <Toolkit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
