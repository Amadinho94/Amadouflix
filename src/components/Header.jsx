import {NavLink} from "react-router-dom"

const Header = () => {
    
    return (
        <header className="header-background">
             <h1 className="header-logo"> AMADOUFLIX </h1>
             <nav className="header-nav-flex">
                    <NavLink className="header-navlink-style" to="/"> Accueil </NavLink>
                    <NavLink className="header-navlink-style" to="/films"> Films </NavLink>
                    <NavLink className="header-navlink-style" to="/contact"> Contact </NavLink>
             </nav>
        </header>
    )
}

export default Header