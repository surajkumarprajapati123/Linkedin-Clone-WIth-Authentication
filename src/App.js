import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fid from './Components/Fid'
import Header from './Components/Header'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import Widget from './Components/Widget'
import { loginuser, logoutuser, selectuser } from './features/UserSlice'
import { auth } from './Firebase'

function App() {
  const user =useSelector(selectuser);
  const dispatch = useDispatch();
      useEffect(()=> {
        auth.onAuthStateChanged((userAuth)=> {
         
          if(userAuth){
            dispatch(loginuser({
              email:userAuth.email,
              uid:userAuth.uid,
              photoURL:userAuth.photoURL,
              displayName:userAuth.displayName
            }))
  
          }
          else {
            dispatch(logoutuser);
          }
          
        })
      },[])

  return (
   
  <>
  {
    !user ? (<Login />):
    (
      <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Fid />
        <Widget />
      </div>
     
    </div>
    )
  }
      
  </>
  )
}

export default App
