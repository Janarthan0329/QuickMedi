import React from 'react';
import { motion } from "framer-motion";
import "../styles/LandingPage.css"; // Import your CSS file

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">Your Health, Our Priority</h1>
                    <p className="hero-description">Providing expert healthcare solutions for a healthier future.</p>
                    <button className="hero-button">Book an Appointment</button>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                </div>
                <div className="section-description">
                    <p>We offer specialized medical treatments and consultations.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-icon">👨‍⚕️</span>
                        <h3>General Checkups</h3>
                        <p>Routine health assessments to ensure well-being.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">🦷</span>
                        <h3>Dental Care</h3>
                        <p>Comprehensive dental checkups and treatments.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">💉</span>
                        <h3>Vaccinations</h3>
                        <p>Protect your health with essential vaccinations.</p>
                    </div>
                </div>
            </section>


            {/* Booking Section */}
            <section className="booking-section">
                <div className="section-title1">
                    <h2>Book an Appointment</h2>
                </div>
                <div className="booking-form-container">
                    <form className="booking-form">
                        <input type="text" placeholder="Your Name" className="form-input" />
                        <input type="email" placeholder="Your Email" className="form-input" />
                        <input type="date" className="form-input" />
                        <button type="submit" className="submit-button">Book Now</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
