import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import "../Login/Login.css";

export default function Login() {
    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (e) => {
        e.preventDefault()
      

    }
    const register = () => {

    }
  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" />
      <form>
        <input placeholder="Full name (required if registering" type="text" value={name} onChange={(e) => setName(e.target.value)}  required/>
        <input placeholder="Profile pic URL (Optional)" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}/>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" onClick={login }>Sing in</button>
      </form>

      <p>Not a member? {" "}

          <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  );
}
