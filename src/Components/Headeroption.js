import { Avatar } from '@material-ui/core'
import React from 'react'
import {  useSelector } from 'react-redux'
import {  selectuser } from '../features/UserSlice'
import "../Styles/headeroption.css"
import firebase from 'firebase/compat/app';

function Headeroption({Icon,title,avatar}) {
  const user = useSelector(selectuser);
  
  return (
    <div className='headeroption'>
        {
          Icon && <Icon />
        }
        {
          avatar && <Avatar  name ={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()} title="Sign Out" />
        }
       <span>{title}</span>
    </div>
  )
}

export default Headeroption
