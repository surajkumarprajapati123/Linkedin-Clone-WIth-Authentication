import React, { useState } from 'react'
import "../Styles/login.css"
import { auth } from '../Firebase';
import {useDispatch} from 'react-redux'
import { loginuser } from '../features/UserSlice';

function Login() {
    const [signup ,setsignup] = useState(false)
    const [name,setName]=useState();
    const [photoURL,setphotoURL]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const dispatch = useDispatch();

   const Register =(e)=>
   {
        e.preventDefault();
        if(!name)
        {
            alert("Name is required")
        }
        if(!photoURL)
        {
            alert("image url is required")
        }
        if(!email)
        {
            alert("email is required")
        }
        if(!password)
        {
            alert("Password is required")
        }
        
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>
        {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:photoURL
            }).then(()=>
            {
                 dispatch(loginuser({
                   email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   photoURL:userAuth.user.photoURL,
                   displayName:name
                 }))
            })
        }).catch(error=>alert(error))
        setName("");
        setemail("");
        setphotoURL("");
        setpassword("");
   }

   const signIn=(e)=>
   {
    e.preventDefault();
    if(!email)
    {
        alert("email is required")
    }
    if(!password)
    {
        alert("Password is required")
    }
       auth.signInWithEmailAndPassword(email,password).then(({user})=>
       {
        dispatch(loginuser(
            {
                email:user.email,
                uid:user.uid,
                photoURL:user.photoURL,
                displayName:user.displayName

            }
        ))
       }).catch(error=>alert(error))
   }


  return (
        
               <div className='loginscreen'>
    <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="" />
    {
        signup === true ? (
            <form onSubmit={Register}>
               <input type="text" placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)} />

                <input type="text" placeholder='Enter Image Url' value={photoURL} onChange={e=>setphotoURL(e.target.value)} />

                <input type="email" placeholder='Email' value={email} onChange={e=>setemail(e.target.value)}/>

                <input type="password" placeholder='password' value={password} onChange={e=>setpassword(e.target.value)} />
                
                <input type="submit" value="Sign Up" />
                <h4>Alredy a memeber <span onClick={e=>setsignup(false)}>Login Here</span></h4>
                
       </form>
        )
        :
        (
            <form onSubmit={signIn}>
                <input type="email" placeholder='email' value={email} onChange={e=>setemail(e.target.value)} />
                <input type="password" placeholder='password'value={password} onChange={e=>setpassword(e.target.value)} />
                
                <input type="submit" value="Sign In" />
                <h4>Not a memeber ? <span onClick={e=>setsignup(true)}>Register Here</span></h4>
                
       </form>
        )
    }
      
       
    </div>
        
  )
}

export default Login
