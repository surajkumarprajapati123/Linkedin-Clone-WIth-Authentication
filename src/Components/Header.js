import React from 'react'
import "../Styles/header.css"
import Search from "@material-ui/icons/Search"
import Headeroption from './Headeroption'
import HomeIcon from '@material-ui/icons/Home'
import People from '@material-ui/icons/People'
import BusinessCenter from '@material-ui/icons/Business'
import Message from '@material-ui/icons/Message'
import Notification  from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectuser } from '../features/UserSlice'


function Header() {
  const user = useSelector(selectuser)
  
  return (
    <div className='header'>
        <div className="header_left">
           <div className="header_logo">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" />
         
           </div>
           <div onC className="header_search">
            <Search />
                <input type="text" placeholder='Search Here' />
           </div>
        </div>
        <div  className="header_right">
              <Headeroption Icon ={HomeIcon} title="Home" />
              <Headeroption Icon ={People} title="People" />
              <Headeroption Icon ={BusinessCenter} title="Job" />
              <Headeroption Icon ={Message} title="Message" />
              <Headeroption Icon ={Notification} title="Notification" />
              <Headeroption avatar ={Avatar} title={user.displayName} />
        </div>
    
    </div>
  )
}

export default Header
