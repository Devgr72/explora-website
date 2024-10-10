import React,{useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './BookService.css'; 
function Bookservice() {
  const location = useLocation();
  const serviceId = location.state.serviceId;
  const [service, setService] = useState(null);
  const [ticketCount,setTicketCount] = useState(1);
  const navigate = useNavigate();
  console.log(serviceId);
  useEffect(() => {
    const fetchServiceDetails = async () => {
       
        const response = await axios.get(`http://localhost:8000/services/${serviceId}`);
        console.log(response.data)
      setService(response.data);
    };
    fetchServiceDetails();
  },[serviceId]);

  const increaseTicketCount = () => {
    setTicketCount(prevCount => prevCount + 1);
  };
  const decreaseTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount(prevCount => prevCount - 1);
    }
  };

 
  const handleConfirmPay = () => {
    alert(`You have purchased ${ticketCount} ticket(s) for ${service.location} at ${ticketCount*service.price} USD.`);
    navigate('/services')
  };

  
  const handleCancel = () => {
    navigate('/services');
  };

  if (!service) {
    return <p>Loading service details...</p>;
  }

  return (
    <div className="booking-container">
      <h2>Book Service: {service.location}</h2>
      <div className="booking-details">
        <img src={service.image} alt={service.location} className="booking-image" />
        <div className="booking-info">
          <p>{service.description}</p>
          <p className="booking-price">Price per ticket:{service.price}USD</p>
        </div>
      </div>

      <div className="ticket-controls">
        <button className="ticket-btn" onClick={decreaseTicketCount}>-</button>
        <span className="ticket-count">{ticketCount}</span>
        <button className="ticket-btn" onClick={increaseTicketCount}>+</button>
      </div>

      <p className="total-price">Total: {ticketCount *service.price} USD</p>

      <div className="booking-actions">
        <button className="confirm-button" onClick={handleConfirmPay}>Confirm Pay</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Bookservice;
