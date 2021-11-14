import React from "react";
import { auth } from "../Firebase/Firebase";
import "../Login/Login.css";

export default function Login() {
    const login = (e) => {
        e.preventDefault()
        auth

    }
    const register = () => {

    }
  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" />
      <form>
        <input placeholder="Full name (required if registering" type="text"  required/>
        <input placeholder="Profile pic URL (Optional)" />
        <input placeholder="Email" type="email"  required/>
        <input placeholder="Password" type="password" required />
        <button type="submit" onClick={login }>Sing in</button>
      </form>

      <p>Not a member? {" "}

          <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  );
}
