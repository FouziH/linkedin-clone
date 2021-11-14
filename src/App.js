import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";


function App() {
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
