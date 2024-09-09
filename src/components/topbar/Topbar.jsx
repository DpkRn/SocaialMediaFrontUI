
import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Connect</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <input
              placeholder="search friend or post"
              type="text"
              className="searchInput"
            />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="topbarRight">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <ChatIcon /> <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
        </div>

        <img src="/assets/person/1.png" alt="img" className="topbarImg" />
      </div>
    </>
  )
}

export default Topbar
