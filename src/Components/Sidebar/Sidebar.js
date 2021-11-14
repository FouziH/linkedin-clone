import { Avatar } from "@material-ui/core";
import React from "react";
import "../Sidebar/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser)
  const recentItems = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user?.photoUrl? user?.email[0]: null}/>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,488</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("react.js")}
        {recentItems("Virtualprogramming")}
        {recentItems("Softwareengineering")}
        {recentItems("Coding")}
        {recentItems("Programming")}
        {recentItems("Design")}
        {recentItems("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
