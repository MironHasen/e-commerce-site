import React from "react";
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="login_signup_fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="login_signup_login">
          Already have an account ? <span>Login here</span>{" "}
        </p>
        <div className="login_signup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
