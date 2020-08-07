import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <Link to="/login">
          <img
            className="login-img"
            src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
            alt="Logo"
          />
        </Link>
        <div className="login-form">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <h5>Password</h5>
            <input
              //   value={password}
              //   onChange={(e) => setPasword(e.target.value)}
              type="password"
            />
            <button type="submit" className="login-sign-button">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
          <button type="submit" className="login-regis-button">
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
