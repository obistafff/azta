import { Link, NavLink } from 'react-router'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-interieur">
        <Link to="/" className="header-logo">AZTA</Link>
        <nav className="header-nav" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/le-spectacle">Le spectacle</NavLink>
          <NavLink to="/les-assos">Les assos</NavLink>
          <NavLink to="/artistes">Artistes</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header