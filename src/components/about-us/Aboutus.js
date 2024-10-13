import React from 'react';
import myimg from '../Assets/about1.jpg'
import cr7 from '../Assets/ronaldo.jpeg'
import lm10 from '../Assets/messi.jpeg'
import '../about-us/About.css'
import { Link } from 'react-router-dom';
function Aboutus() {
    return (
        <div className='about-us'>
            <div className='container-about'>
                <header className='about-header'>
                    <h1>About Us</h1>
                    <p>Discover the world with us.</p>
                </header>
                
                <section className='our-mission'>
                    <h2>Our Mission</h2>
                    <p>At TravelKhana, our mission is to provide unforgettable travel experiences that inspire, educate, and delight. We are committed to offering personalized, high-quality tours that cater to the unique interests and needs of each traveler. Our goal is to turn your dream vacation into reality.</p>
                </section>

                <section className='our-values'>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority. We strive to exceed your expectations with every trip.</li>
                        <li><strong>Authenticity:</strong> We believe in providing genuine experiences that connect you with the local culture and environment.</li>
                        <li><strong>Sustainability:</strong> We are dedicated to promoting responsible travel and preserving the natural beauty of the destinations we visit.</li>
                        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency, ensuring trust and reliability in all our interactions.</li>
                    </ul>
                </section>

                <section className='our-story'>
                    <h2>Our Story</h2>
                    <p>Founded in 1947, TravelKhanabegan as a small travel agency with a passion for exploring the world and sharing those experiences with others. Over the years, we have grown into a leading tour operator, thanks to our dedicated team and loyal customers. Our journey has been one of adventure and growth, and we are excited to continue helping travelers discover new horizons.</p>
                </section>

                <section className='meet-the-team'>
                    <h2>Meet the Team</h2>
                    <div className='team-members'>
                        <div className='team-member'>
                            <img src={myimg} alt='Team Member 1' />
                            <h3>Dev Grover</h3>
                            <p>Founder & CEO</p>
                            <p>Dev’s love for travel began in his early years, leading him to create a company that shares his passion with the world.</p>
                        </div>
                        <div className='team-member'>
                            <img src={cr7} alt='Team Member 2' />
                            <h3>Cristiano Ronaldo</h3>
                            <p>Travel Consultant</p>
                            <p>Ronaldo’s extensive travel experience and in-depth knowledge of destinations make her the go-to expert for planning your perfect trip.</p>
                        </div>
                        <div className='team-member'>
                            <img src={lm10} alt='Team Member 1' />
                            <h3>Messi</h3>
                            <p>Naukar</p>
                            <p>Messi’s love Jhadu Pocha in his early years just like girls, He is very dumb but he plays football very well.</p>
                        </div>
                    </div>
                </section>

                <section className='contact-us'>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us. We’re here to help make your travel dreams come true.</p>
                    <p>Email: <a href='devgr102@gmail.com'>devgr102@.com</a></p>
                    <p>Phone: 102</p>
                    <p>Address: 123 Mori gate, delhi, india</p>
                </section>
                <Link to='/'>
                <button className='submit11'>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Aboutus;
