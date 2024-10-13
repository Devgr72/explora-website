import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './BookService.css';

function Bookservice() {
  const location = useLocation();
  const serviceId = location.state.serviceId;
  const [service, setService] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/services/${serviceId}`);
        console.log('Service Data:', response.data);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service details", error);
      }
    };
    fetchServiceDetails();
  }, [serviceId]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  
  const increaseTicketCount = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decreaseTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount((prevCount) => prevCount - 1);
    }
  };

  const handleConfirmPay = async () => {
    const price = parseFloat(service.price?.replace('$', '') || 0); 
    const totalAmount = ticketCount * price * 1; 
  
    try {
     
      const orderResponse = await axios.post('http://localhost:8000/create-order', { amount: totalAmount });
  
      const options = {
        key: 'rzp_test_Syu8Zea6zXm8yN', 
        amount: totalAmount, 
        currency: 'INR',
        name: service.location,
        description: `Payment for ${ticketCount} ticket(s)`,
        order_id: orderResponse.data.id, 
        handler: function (response) {
          
          alert(`Payment successful!.. Payment ID: ${response.razorpay_payment_id}`);
          navigate('/services');
        },
        prefill: {
          name: "Dev Gr72",
          email: "devgrover72@gmail.com",
          contact: "9971381635"
        },
        theme: {
          color: "#007BFF"
        }
      };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Error in payment", error);
  }
};
  const handleCancel = () => {
    navigate('/services');
  };

  if (!service) {
    return <p>Loading service details...</p>;
  }

  const price = parseFloat(service.price?.replace('$', '') || 0);
  return (
    <div className="booking-container">
      <h2>Book Service: {service.location}</h2>
      <div className="booking-details">
        <img src={service.image} alt={service.location} className="booking-image" />
        <div className="booking-info">
          <p>{service.description}</p>
          <p className="booking-price">Price per ticket: {service.price || 'N/A'} USD</p> 
        </div>
      </div>

      <div className="ticket-controls">
        <button className="ticket-btn" onClick={decreaseTicketCount}>-</button>
        <span className="ticket-count">{ticketCount}</span>
        <button className="ticket-btn" onClick={increaseTicketCount}>+</button>
      </div>

      <p className="total-price">Total: {(ticketCount * price).toFixed(2)} USD</p>

      <div className="booking-actions">
        <button className="confirm-button" onClick={handleConfirmPay}>Confirm Pay</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Bookservice;
