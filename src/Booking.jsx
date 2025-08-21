import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike } = location.state || {};
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    licenseNumber: '',
    startDate: '',
    endDate: '',
    paymentMethod: 'credit-card'
  });

  if (!bike) {
    return (
      <div className="booking-container">
        <div className="booking-error">
          <h2>No bike selected for booking</h2>
          <button onClick={() => navigate('/dashboard')} className="back-btn">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed successfully!');
    navigate('/dashboard');
  };

  const calculateTotal = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return days * bike.price;
    }
    return 0;
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book Your Bike</h1>
        <button onClick={() => navigate('/dashboard')} className="back-btn">
          ← Back to Bikes
        </button>
      </div>

      <div className="booking-content">
        <div className="bike-summary">
          <h2>Bike Details</h2>
          <div className="bike-card-summary">
            <img src={bike.image} alt={bike.name} className="bike-image-summary" />
            <div className="bike-info">
              <h3>{bike.name}</h3>
              <p className="price">₹{bike.price}/day</p>
              <p>{bike.description}</p>
              <p>{bike.distance}</p>
              <p>{bike.excess}</p>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>License Number *</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>

          <h2>Booking Details</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label>Pick-up Date *</label>
              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Return Date *</label>
              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Payment Method *</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="net-banking">Net Banking</option>
            </select>
          </div>

          <div className="price-summary">
            <h3>Price Summary</h3>
            <div className="price-details">
              <p>Price per day: ₹{bike.price}</p>
              <p>Number of days: {formData.startDate && formData.endDate ? 
                Math.ceil((new Date(formData.endDate) - new Date(formData.startDate)) / (1000 * 60 * 60 * 24)) : 0}
              </p>
              <p className="total-price">Total: ₹{calculateTotal()}</p>
            </div>
          </div>

          <button type="submit" className="confirm-booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;