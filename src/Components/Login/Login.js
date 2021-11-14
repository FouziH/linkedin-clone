import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase/Firebase";
import { login } from "../../features/userSlice";
import "../Login/Login.css";


export default function Login() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginToApp = (event) => {
     event.preventDefault();
      

    }
    const register = () => {
        if(!name) {
            return alert("Please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>  {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name, 
                    photoURL: profilePic

                }))
            })
        }).catch(error  => alert(error))

    }
  return (
    <div className="login">
      <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" />
      <form>
        <input placeholder="Full name (required if registering" type="text" value={name} onChange={(e) => setName(e.target.value)}  required/>
        <input placeholder="Profile pic URL (Optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" onClick={loginToApp}>Sing in</button>
      </form>

      <p>Not a member? {" "}

          <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  );
}
