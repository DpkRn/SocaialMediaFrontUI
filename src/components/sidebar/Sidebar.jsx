import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData.js'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
         <li className="sidebarListItem">
            <RssFeedIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Feeds</span>
         </li>
         <li className="sidebarListItem">
            <MarkChatUnreadIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Chats</span>
         </li>
         <li className="sidebarListItem">
            <VideoLibraryIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Videos</span>
         </li>
         <li className="sidebarListItem">
            <GroupsIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Groups</span>
         </li>
         <li className="sidebarListItem">
            <BookmarksIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
         </li>
         <li className="sidebarListItem">
            <ContactSupportIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Questions</span>
         </li>
         <li className="sidebarListItem">
            <WorkIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Jobs</span>
         </li>
         <li className="sidebarListItem">
            <EventIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Events</span>
         </li>
         <li className="sidebarListItem">
            <SchoolIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Courses</span>
         </li>
         <li className="sidebarListItem">
            <EventIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Events</span>
         </li>
         <li className="sidebarListItem">
            <SchoolIcon className='sidebarListIcon'/>
            <span className="sidebarListItemText">Courses</span>
         </li>
        </ul>
        <button className="sidebarBtn" onClick={(e)=>{
        }}>Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(user=><li key={user.id} className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>)}
          
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar