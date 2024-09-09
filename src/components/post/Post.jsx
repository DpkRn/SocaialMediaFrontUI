import React,{useState} from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from '../../dummyData.js'

function Post({post}) {
  
    const[info,setInfo]=useState({
        likes:post.like,
        comments:post.comment,
        isLiked:false
    })
    const handleLike=()=>{
        setInfo((info)=>({...info,likes:info.isLiked?info.likes-1:info.likes+1,isLiked:!info.isLiked}))
    }
    const handleComment=()=>{
        setInfo((info)=>({...info,comments:info.comments+1}))
    }
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users[post.id-1].profilePicture} alt="" className="postProfileImg" />
                    <span className="postProfileName">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon className='postTopVerticalIcon'/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">
                    {post.desc} 
                </span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/heart.png" onClick={handleLike} alt="" className="likeIcon" />
                    <img src="assets/like.png" onClick={handleLike} alt="" className="likeIcon" />
                    <span className="postLikesCounter">{info.likes} people like it</span>
                </div>
                <div className="postBottomRight">
                    <CommentIcon/>
                    <span className="postCommentsCounter" onClick={handleComment}>{info.comments} comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post