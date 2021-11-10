import { Avatar } from "@material-ui/core";
import React from "react";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Hamza A Mohamed</h2>
        <h4>Hamzafowzi1@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stats">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stats">
          <p>Connections</p>
          <p className="sidebar_statNumber">2,488</p>
        </div>
      </div>
      <div className="sidebar_bottom">

      </div>
    </div>
  );
}

export default Sidebar;
