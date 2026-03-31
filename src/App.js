import AboutMe from "./Components/AboutMe";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio";
import References from "./Components/References";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
      </header>
      
      <main className="Main">
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <References />
      </main>
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
