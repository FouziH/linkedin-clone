import React from "react";
import "../Login/Login.css";

export default function Login() {
    const login = () => {

    }
    const register = () => {

    }
  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" />
      <form>
        <input placeholder="Full name (required if registering" type="text" />
        <input placeholder="Profile pic URL (Optional)" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={login }>Sing in</button>
      </form>

      <p>Not a member? 

          <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  );
}
