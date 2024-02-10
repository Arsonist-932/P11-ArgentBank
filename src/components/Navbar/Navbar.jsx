import { NavLink } from "react-router-dom";

import Logo from "../../assets/img/argentBankLogo.png";
import "./Navbar.scss";
import ConnectNavbar from "../ConnectNavbar/ConnectNavbar";

function Navbar() {
  // Authentificate Management
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const isAuthenticated = !!token;

  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {isAuthenticated ? (
          <ConnectNavbar />
        ) : (
          <div>
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
