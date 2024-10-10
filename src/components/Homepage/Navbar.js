import React, { useState } from 'react';
import logo from '../Assets/logo-video.mp4'; 
import '../../App.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Userslice'; 

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.name);

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="main-nav">
        {/* Logo */}
        <div className='login-video'>
          <video width="100px" height="50px" autoPlay loop muted>
            <source src={logo} type="video/mp4" />
          </video>
          <h1 className='img-h1'>Explora</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <span className="sidebar-close" onClick={toggleSidebar}>&times;</span>
        
        {/* Main menu */}
        <ul>
          <li>
            <Link to='/' onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to='/aboutus' onClick={toggleSidebar}>About</Link>
          </li>
          <li>
            <Link to='/services' onClick={toggleSidebar}>Services</Link>
          </li>
          <li>
            <a href='#' onClick={toggleSidebar}>Booking</a>
          </li>
        </ul>

        {/* Login/Signup buttons */}
        <div className='sidebar-login-signup'>
          {isLoggedIn ? (
            <>
              <span>Welcome, {userName}!</span>
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </>):
            (
            <>
              <Link to='/login' onClick={toggleSidebar}>
                <button className="btn btn-primary">Signup</button>
              </Link>
              <Link to='/loginpage' onClick={toggleSidebar}>
                <button className="btn btn-primary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
