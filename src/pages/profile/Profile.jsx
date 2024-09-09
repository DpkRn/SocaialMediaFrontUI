import React, { useContext } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";

import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { CreateContext } from "../../Context/CreateContext";


export default function Profile() {
  const context=useContext(CreateContext)
  const user=context.User
  return (
    <div>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="imgContainer">
              <img src="/assets/post/3.jpeg" alt="" className="coverImg" />
              <img src="/assets/person/1.png" alt="" className="profileImg" />
            </div>
            <div className="infoContainer">
              <h4 className="profileName">{user.username}</h4>
              <span className="profileBio">{user.email}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
