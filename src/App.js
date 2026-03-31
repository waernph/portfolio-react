

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="Navbar-ul">
            <li className="Navbar-li"><a href="#about-me">About Me</a></li>
            <li className="Navbar-li"> <a href="#skills">Skills</a></li>
            <li className="Navbar-li"> <a href="#portfolio">Portfolio</a></li>
            <li className="Navbar-li"> <a href="#references">References</a></li>
          </ul>
        </nav>
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
