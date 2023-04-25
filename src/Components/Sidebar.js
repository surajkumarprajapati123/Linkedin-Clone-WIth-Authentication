import React from 'react'
import "../Styles/sidebar.css"
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectuser } from '../features/UserSlice'

function Sidebar() {

  const user = useSelector(selectuser);
  return (
    <div className='sidebar'>
       <div className="sidebar__profile">
              <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyea252bkYoYgpPi52T2_kjlNBy5lMjmM-w&usqp=CAU"  alt="" title='BackGround image' />
              <div className="sidebar_profile_details">
                  <Avatar src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
                  <p>Web developer</p>
              </div>
        
              <div className="profile__stats">
                  <span>Who person viewed profil</span>
                  <span className='stas'>20</span>
              </div>
              <div className="profile__stats">
                  <span>Connection<br/><b>obtaine the message system</b></span>
                  <span className='stas'>500</span>
              </div>
         </div>
        <div className="sidebar__recent">
           <p>Recent</p>
           <p className='hash'><span>#</span>branding</p>
           <p className='hash'><span>#</span>branding</p>
           <p className='hash'><span>#</span>branding</p>
           <p className='hash'><span>#</span>branding</p>
           <p className='hash'><span>#</span>branding</p>
        </div>
        
    </div>
  )
}

export default Sidebar
