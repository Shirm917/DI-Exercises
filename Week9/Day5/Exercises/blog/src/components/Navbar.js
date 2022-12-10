import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                <Link to="/" className="brand-logo">My Blog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;