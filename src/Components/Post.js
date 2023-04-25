import React from 'react'
import "../Styles/post.css"
import { Avatar} from '@material-ui/core'
import MoreOption from '@material-ui/icons/MoreVert'
import Like from '@material-ui/icons/ThumbUp'
import Message from '@material-ui/icons/Message'
import Share from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'

function Post({name,discription,message,photoURL})
   {
      return (
        <div className='post'>
                <div className="post__header">
                        <div className="post_header_left">
                            <Avatar src={photoURL} title="Profile Image" />
                            <div className="post_profile_details">
                            <h4>{name}</h4>
                            <p>{message}</p>
                            </div>
                        </div>
                      
                            <MoreOption />
                        
                </div>
            <div className="post_body">
                <p>{discription}</p>
            </div>
            <div className="post_footer">
                    <div className="post__footer_option">
                      <Like />
                      <span>Like</span>
                    </div>
                    <div className="post__footer_option">
                      <Message />
                      <span>Message</span>
                    </div>
                    <div className="post__footer_option">
                      <Share />
                      <span>Share</span>
                    </div>
                    <div className="post__footer_option">
                      <SendIcon />
                      <span>Send</span>
                    </div>
            </div>
          
        </div>
      )}


export default Post
