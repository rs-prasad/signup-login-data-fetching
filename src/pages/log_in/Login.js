import "./login.css";
import { useState } from "react";

const Login = () => {
  const [personDetail, setPersonDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonDetail({ ...personDetail, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="login-container">
        <div className="login__content-container">
          <h3 className="login__heading">Sign Up</h3>
          <form
            action=""
            className="login-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <fieldset className="login-form__input-container">
              <div className="login-form__email login__input-field">
                <label htmlFor="login__email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={personDetail.email}
                  id="login__email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="login-form__password login__input-field">
                <label htmlFor="login__password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={personDetail.password}
                  id="login__password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button type="submit" className="login__submit-btn">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
