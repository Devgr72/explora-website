import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Get the logged-in user ID from localStorage
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Fetch user bookings from the backend
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user-bookings/${userId}`);
        if (response.data.message) {
          setMessage(response.data.message);
        } else {
          setBookings(response.data); // Store bookings if available
        }
      } catch (error) {
        setMessage('Error fetching bookings');
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };
    
    fetchBookings(); // Call fetch function on page load
  }, [userId]);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  return (
    <div className="bookings-container">
      <h2>Your Bookings</h2>
      {message ? (
        <p>{message}</p> // Show message if no bookings found
      ) : (
        bookings.map((booking) => (
          <div key={booking.serviceId} className="booking-card">
            <h3>{booking.location}</h3>
            <p>Date: {booking.date}</p>
            <p>Tickets: {booking.tickets}</p>
            <p>Total Amount: ${booking.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookings;
