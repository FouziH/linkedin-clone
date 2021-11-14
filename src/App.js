import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";
import { auth } from "./Components/Firebase/Firebase";
import { useDispatch } from "react-redux";
import { logout, login } from "./features/userSlice";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

      }else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}

      {/* Sider */}
      {/* Feed*/}
      {/* Widgets */}
    </div>
  );
}

export default App;
