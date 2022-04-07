import "./navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextAPI";

const Navbar = () => {
  //hooks
  const [buttonContent, setButtonContent] = useState("Login");
  const { logOutUser, store } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (/login$/.test(window.location.href)) setButtonContent("Sign Up");
    else if (new RegExp("/$").test(window.location.href))
      setButtonContent("Login");
    else if (store.getState().isLoggedIn) {
      setButtonContent("Log Out");
    }
  }, [window.location.href]);

  //event handlers
  const handleClick = () => {
    if (buttonContent === "Login") {
      navigate("./login", { replace: true });
    } else if (buttonContent === "Sign Up") {
      navigate("./");
    } else if (buttonContent === "Log Out") {
      logOutUser();
      navigate("./login", { replace: true });
    }
  };

  const handleFetchClick = () => {
    if (store.getState().isLoggedIn) {
      navigate("./fetch-with-auth", { replace: true });
    } else {
      navigate("./fetch-normal", { replace: true });
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar__company-logo">Krishi Network</div>
      <div className="navbar__btn-container">
        <button className="navbar__fetch-btn" onClick={handleFetchClick}>
          Fetch
        </button>
        <button
          className="navbar__login-signup-logout-btn"
          onClick={handleClick}
        >
          {buttonContent}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
