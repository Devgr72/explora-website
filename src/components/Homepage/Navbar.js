import React from 'react';
import logo from '../Assets/logo-video.mp4'; 
import '../../App.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Userslice'; // Import the logout action

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.name);
  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
  };
  return (
    <>
      {/* navbar code */}
      <nav className="main-nav">
        {/* Logo */}
        <div className='logo'>
          <div className='login-video'>
            <video width="400px" height="120px" autoPlay loop muted>
              <source src={logo} type="video/mp4" />
            </video>
            <h1 className='img-h1'>Explora</h1>
          </div>
        </div>
        {/* Main menu */}
        <div className='main-menu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutus'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <a href='#'>Booking</a>
            </li>
          </ul>
        </div>
        <div className='login-signup'>
          {isLoggedIn ? (
            <>
              <span>Welcome, {userName}!</span>
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </>):
            (
            <>
              <Link to='/login'>
                <button className="btn btn-primary" type="button">Signup</button>
              </Link>
              <Link to='/loginpage'>
                <button className="btn btn-primary" type="button">Login</button>
              </Link>
            </>
          )}
        </div>
      </nav>
      <section className='banner'>
        {/* <img src={banner} ></img> */}
      </section>
    </>
  );
}

export default Navbar;
