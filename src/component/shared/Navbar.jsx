import Logo from "./logo";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-brand">
                    <div className="nav-logo">
                        <Logo />

                    </div>
                    <span className="navbar-name">CineScope</span>
                    </div>

                <div className="navbar-links">
                    <Link to="/" className="navbar-link navbar-link-active">
                        Home
                    </Link>

                    <Link className="navbar-link">
                        Discover
                    </Link>

                    <Link to="/Watchlist" className="navbar-link">
                        Watchlist
                    </Link>
                </div>

                <div className="navbar-actions">
                    <button className="navbar-search">
                        🔍
                    </button>

                    <button className="navbar-profile">
                        C
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;