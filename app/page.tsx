import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Projects       from './components/Projects';
import Skills         from './components/Skills';
import Resume         from './components/Resume';
import Footer         from './components/Footer';
import ScrollObserver from './components/ScrollObserver';

export default function Page() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Footer />
      </main>
    </>
  );
}
