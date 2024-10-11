import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login-signup/Login.css';
import logo from '../Assets/logo-video.mp4';
import backvideo from '../Assets/login-background1-video.mp4';
import axios from 'axios';

function Login() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [nameerror, setnameerror] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passerror, setpasserror] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const navigate = useNavigate();

  function emailvalid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  function passvalid(pass) {
    return pass.length > 7;
  }

  function namevalid(name) {
    return name.trim() !== '';
  }

  const validateFields = () => {
   let valid = true;
    if (!namevalid(name)) {
      setnameerror('Name cannot be empty');
      valid = false;
    } else {
      setnameerror('');
    }

    if (!emailvalid(email)) {
      setemailerror('Enter valid email');
      valid = false;
    } else {
      setemailerror('');
    }

    if (!passvalid(pass)) {
      setpasserror('Min 8 characters');
      valid = false;
    } else {
      setpasserror('');
    }

    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setname(value);
    } else if (name === 'email') {
      setemail(value);
    } else if (name === 'pass') {
      setpass(value);
    }
  };
  

  const handleClick = async () => {
    setSubmitted(true);
    if (validateFields()) {
      const data = { name, email, pass };
      
      try {
        axios.post('http://localhost:8000/sent-otp',{email});
        const response = await axios.post('http://localhost:8000/login', data);
        if (response.status === 200) {
      
          navigate('/verify-otp',{state:{mail:email}});
        }
      } catch (error) {
        console.error('Error during sign-up', error);
       
      }
    }
  };
  

  return (
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
          <button className='btn1'><i className='bx bx-x'></i></button>
        </Link>

        <div className='inputs'>
          <div className='input'>
            <i className="fas fa-user"></i>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} value={name} required/>
          </div>
          {submitted && <div className='login-error1'>{nameerror}</div>}

          <div className='input'>
            <i className="fas fa-envelope"></i>
            <input type='email' name='email'  placeholder='Email id'  onChange={handleChange}  value={email}  required
            />
          </div>
          {submitted && <div className='login-error1'>{emailerror}</div>}

          <div className='input'>
            <i className='bx bxs-key'></i>
            <input type='password' name='pass'  placeholder='Password'   onChange={handleChange}   value={pass}  required
            />
          </div>
          {submitted && <div className='login-error1'>{passerror}</div>}
        </div>

        <div className='submit-container'>
        <Link to='/verify-otp'>
          <button className='submit' onClick={handleClick}>Sign Up</button>
          </Link>
          <Link to='/loginpage'>
            <button className='submit1 grey'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
