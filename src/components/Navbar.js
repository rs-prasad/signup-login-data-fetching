import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar__company-logo">Krishi Network</div>
      <div className="navbar__btn-container">
        <button className="navbar__fetch-btn">Fetch</button>
        <button className="navbar__login-signup-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
