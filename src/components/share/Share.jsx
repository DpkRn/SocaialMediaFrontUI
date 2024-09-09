import React from 'react'
import './share.css'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ImageIcon from '@mui/icons-material/Image';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import StyleIcon from '@mui/icons-material/Style';

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.png" alt="" className="shareImg" />
          <input placeholder="whats in your mind" type="text" className="shareInputBar" />
         
        </div>
        <hr className="topBottomDevider"  />
        <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                <ImageIcon htmlColor='tomato' className='shareIcon'/>
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
              <StyleIcon htmlColor='blue' className='shareIcon'/>
                <span className="shareOptionText">Tags</span>
              </div>
              <div className="shareOption">
              <LocationCityIcon htmlColor='green' className='shareIcon'/>
                <span className="shareOptionText">Locations</span>
              </div>
              <div className="shareOption" >
                <AddReactionIcon htmlColor='goldenrod' className='shareIcon'/>
                <span className="shareOptionText">Feeling</span>
              </div>
          </div>
          <button className="sharePostBtn">Post</button>
          
        </div>
      </div>

    </div>
  )
}

export default Share