import DanishAe from '../Media/logos/danishAe.jsx'
function Navbar() {
  return (
    <nav>
      <ul className="Navbar-ul">
        <li className="Navbar-li"><a className="Navbar-li-a" href="#"><DanishAe className="NavbarLogo" /></a></li>
        <li className="Navbar-li"><a className="Navbar-li-a" href="#about-me">About Me</a></li>
        <li className="Navbar-li"><a className="Navbar-li-a" href="#skills">Skills</a></li>
        <li className="Navbar-li"><a className="Navbar-li-a" href="#portfolio">Portfolio</a></li>
        <li className="Navbar-li"><a className="Navbar-li-a" href="#references">References</a></li>
      </ul>

    </nav>
  )
}
export default Navbar;