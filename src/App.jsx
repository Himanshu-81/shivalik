import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StatsBar from './components/StatsBar';
import Faculty from './components/Faculty';
import Programs from './components/Programs';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsBar />
        <Faculty />
        <Programs />
        <Results />
      </main>
      <Footer />
    </>
  );
}

export default App;
