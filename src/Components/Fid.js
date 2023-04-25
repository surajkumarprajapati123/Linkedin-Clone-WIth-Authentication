import React, { useEffect, useState } from 'react'
import '../Styles/fid.css'
import Avatar from '@material-ui/core/Avatar'
import Photo from '@material-ui/icons/Photo'
import Video from '@material-ui/icons/VideoLabel'
import Event from '@material-ui/icons/Event'
import WrapText from '@material-ui/icons/WrapText'
import Post from './Post'
import { db } from '../Firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectuser } from '../features/UserSlice'
import Flipmove from 'react-flip-move'


function Fid() {
  const [posts,setpost] = useState()
  const [input ,setinput] = useState()
  const user = useSelector(selectuser);
    const submitPost=(e)=>
    {
      e.preventDefault();
      // Create the  database and connect to the firebase data server
      db.collection("posts").add({
         name:user.displayName,
         discription:"Message",
         message:input,
         photoURL:user.photoURL,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()
      });
      setinput("")
    }

    useEffect(()=>
    {
      db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>
        {
          setpost(snapshot.docs.map(doc=>(
            {
              id:doc.id,
              data:doc.data()
            }
          )))
        })
    },[])

    console.log(posts)
  return (
    <div className='feed'>
      <div className="feed__input">
      <div className="feed__form">
                <Avatar src={user.photoURL} />
                <form onSubmit={submitPost}>
                    <input type="text" placeholder='Start post' value={input} onChange={e=>setinput(e.target.value)}/>
                    <button type='text'>Submit</button>
                </form>
                </div>
            
            <div className="fid__option">
                        <div className="option">
                            <Photo style={{color:'#70b5f9'}} />
                            <span>Photo</span>
                        </div>
                        <div className="option">
                            <Video style={{color:'blue'}} />
                            <span>Video</span>
                        </div>
                        <div className="option">
                            <Event  style={{color:'green'}} />
                            <span>Event</span>
                        </div>
                        <div className="option">
                            <WrapText style={{color:'#fc9295'}} />
                            <span>WrapText</span>
                        </div>
                </div>
           </div>
           <Flipmove>

          
      {

           posts&& posts.map(({id, data : {name,discription,message,photoURL}})=>
            {
              return  <Post key={id} name={name} discription = {message} message={discription} photoURL={photoURL} />
            })

      }
      </Flipmove>
     
    </div>
  )
}

export default Fid
