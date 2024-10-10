import React, { useState } from 'react'
import '../Login-signup/Login.css'
import { Link,  useNavigate } from 'react-router-dom'
import logo from '../Assets/logo-video.mp4'
import axios from 'axios'
import backvideo from '../Assets/login-background1-video.mp4'

function ForgetPass() {

   
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [confirmpass,setconfirmpass]=useState('')
    const navigate=useNavigate()
    
    const [emailerror,setemailerror]=useState("")
const[passerror,setpasserror]=useState("")   
const [cpasserror,setcpasserror]=useState("")
    const [check,setcheck]=useState(true)
  
    const[status,setstatus]=useState(false)

    function emailvalid(email){
        const regex = /^([a-zA-Z0-9._%+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email)
      }
      function passvalid (pass){
        if(pass.length>7){
          return true
        }
        else{
          return false
        }
        }
        function cpassvalid(pass,confirmpass){
            if(pass===confirmpass && confirmpass!=='')
                {
               return true
                }
                else{
                    return false
                }
        }
const forgetuser =async () => { 
    let isemailvalid=emailvalid(email)
    let ispassvalid=passvalid(pass)
    let iscpassvalid=cpassvalid(pass,confirmpass)
    
  if(isemailvalid){
    setemailerror(" ")
  }
  else{
    setemailerror("Enter valid email")
  }
  if(ispassvalid){
    setpasserror(" ")
  }
  else{
    setpasserror("Min 8 characters")
  }
  if(iscpassvalid){
    setcpasserror(" ")
  }
  else{
    setcpasserror("Passwords do not match")
  }
  if(isemailvalid && ispassvalid && iscpassvalid){
    setstatus(true)
      }
    const data = {  email, pass };
  if(status){
    
    const response= await axios.post('http://localhost:8000/forget', data)

        
        console.log(response.data);
        if (response.status === 200 && response.data === 'Success') {
        alert("password change successfully")
         navigate('/loginpage'); 
        }
        else{
            setcheck(false)
        }

    }
}
const handleClick = () => {
    forgetuser(); 
}
  return (
    <div>
        <div className='top'>
        <video className='background-video' autoPlay loop muted>
                <source src={backvideo} type="video/mp4" />
            </video>
        <div className='container'>
            <div className='header'>
            <div className='login-video1'>
                <video width="400px" height="120px" autoPlay loop muted>
            <source src={logo} type="video/mp4" />
            </video>
            
              </div>
              <h1 className='video-h1'>Explora</h1> 
            </div>
            <Link to='/'>
            <button className='btn1'><i class='bx bx-x'></i></button>
            </Link>
           
            <div className='inputs'>
                <div className='input'>
                <i class="fas fa-envelope"></i>
                
                    <input type='email' placeholder='Email id' onChange={(t)=>setemail(t.target.value)} value={email} required/>
                </div>
                <div className='login-error'>{emailerror}</div>
                <div className='input'> 
                <i class='bx bxs-key'></i>
                    <input type='password' placeholder='Password' onChange={(t)=>setpass(t.target.value)} value={pass} required/>
                </div>
                <div className='login-error'>{passerror}</div>
                <div className='input'> 
                <i class='bx bxs-key'></i>
                    <input type='password' placeholder='Confirm Password' onChange={(t)=>setconfirmpass(t.target.value)} value={confirmpass} required/>
                </div>
                <div className='login-error'>{cpasserror}</div>
            </div>
            {check===true?<div></div>:<div className='login-error'><p>Email id does not exist..</p></div>}
            <div className='submit-container'>
            <Link to='/login'>
            <button className='submit1 grey' >Cancel</button>
            </Link>
            <button className='submit' onClick={handleClick}>Submit</button>
            <div className='back-home-btn'>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ForgetPass
