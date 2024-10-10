import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]); 
  const [records, setRecords] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:8000/services');
      setServices(response.data);
      setRecords(response.data);
    };
    fetchServices();
  }, []);
  const filter = (event) => {
    const searchTerm=event.target.value.toLowerCase(); 
    setRecords(services.filter(service => service.location.toLowerCase().includes(searchTerm)));
  };
const handleBookNow=(id)=>{
  const token = localStorage.getItem('authorizeToken');
  if (token) {
    
    
   
    navigate(`/bookservice`,{state:{serviceId:id}});
  } else {
    
    navigate('/loginpage');
  }
  
}
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <br/>
      <hr/>
      <div className="search-bar">
      <i class="fas fa-search"></i> 
        <input type="text" className="search-input" placeholder="Search by location..." onChange={filter} 
        />
      </div>
      <div className="service-grid">
        {records.length > 0 ? (
          records.map(service => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.location} className="service-image" />
              <h3>{service.location}</h3>
              <p>{service.description}</p>
              <p className="service-price">{service.price}</p>
              <button className="book-button"  onClick={()=>handleBookNow(service.id)} >Book Now</button>
            </div>
          ))):
          (
          <p>No services found for the selected location.</p>
        )}
      </div>
      <div>
        <Link to='/'>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
