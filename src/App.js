import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <section className="Hero">
          <h1>WRN</h1>
        </section>
      </header>
      <main className="Main">
        <section id="about-me"><h2>About me</h2></section>
        <section id="skills"><h2>Skills</h2></section>
        <section id="portfolio"><h2>Portfolio</h2></section>
        <section id="references"><h2>References</h2></section>
      </main>
      <footer className="Footer">
        <section>footer</section>
      </footer>
    </div>
  );
}

export default App;
