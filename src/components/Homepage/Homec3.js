import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './Homec3.css'
function Homec3() {
  const navigate=useNavigate()
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/services')
      .then(response => {
        const limitedServices = response.data.slice(0, 3);
        setServices(limitedServices);
      })
  }, []);
  const handleBookNow=(id)=>{
    const token = localStorage.getItem('authorizeToken');
    if (token) {
      
      
     
      navigate(`/bookservice`,{state:{serviceId:id}});
    } 
    
  }
  return (
    <div className='dream-trip-section'>
      <h2>Dream Your Next Trip</h2>
      <p>Explore our top services to plan your dream vacation</p>

      <div className='dream-trip-grid'>
        {services.map(service => (
          <div className='dream-service-card' key={service.id}>
            <img src={service.img} alt={service.title} />
            <h3>{service.location}</h3>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>

      <div className='more-services'>
        <Link to='/services'>
          <button className="btn btn-primary">More Services</button>
        </Link>
      </div>
    </div>
  );
}

export default Homec3;
