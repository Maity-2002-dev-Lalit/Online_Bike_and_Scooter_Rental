import React, { useState } from 'react';
import './Dashboard.css';
import bikes from './Data';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const [vehicleType, setVehicleType] = useState("All");
  const [selectedModels, setSelectedModels] = useState(["All"]);

  
  const vehicleTypes = ["All", ...new Set(bikes.map(bike => bike.type))];

 
  const vehicleModels = ["All", ...new Set(bikes.map(bike => bike.name))];

  const handleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleModelChange = (model) => {
    if (model === "All") {
      setSelectedModels(["All"]);
    } else {
      let updated;
      if (selectedModels.includes(model)) {
        updated = selectedModels.filter(m => m !== model);
      } else {
        updated = [...selectedModels.filter(m => m !== "All"), model];
      }
      setSelectedModels(updated);
    }
  };

  const filteredBikes = bikes.filter(bike => {
    if (vehicleType !== "All" && bike.type !== vehicleType) {
      return false;
    }
    if (!selectedModels.includes("All") && !selectedModels.includes(bike.name)) {
      return false;
    }
    return true;
  });

  return (
    <div className="dashboard-container">
      <h1 className="page-title">Available Bikes for Rent</h1>

      <div className="dashboard-content">

   
        <div className="filters">
          <h3>Filters</h3>

          
          <div className="filter-group">
            <p>Vehicle Type</p>
            {vehicleTypes.map(type => (
              <label key={type}>
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={vehicleType === type}
                  onChange={handleTypeChange}
                /> {type}
              </label>
            ))}
          </div>

        
          <div className="filter-group">
            <p>Vehicle Model</p>
            {vehicleModels.map(model => (
              <label key={model}>
                <input
                  type="checkbox"
                  checked={selectedModels.includes(model)}
                  onChange={() => handleModelChange(model)}
                /> {model}
              </label>
            ))}
          </div>
        </div>
 
        <div className="bike-grid">
          {filteredBikes.length > 0 ? (
            filteredBikes.map((bike) => (
              <div key={bike.id} className="bike-card">
                <div className="offer-badge">
                  <span className="offer-tag">{bike.offer}</span>
                  <span className="stock-tag">{bike.stock}</span>
                </div>

                <div className="bike-image-container">
                  <img src={bike.image} alt={bike.name} className="bike-image" />
                </div>

                <h3 className="bike-name">{bike.name}</h3>

                <div className="price-section">
                  <span className="price">₹{bike.price}</span>
                  <span className="price-description">{bike.description}</span>
                </div>

                <div className="details-section">
                  <p className="distance">{bike.distance}</p>
                  <p className="excess">{bike.excess}</p>
                </div>

                 {/* <button className="book-now-btn">BOOK NOW</button>  */}
                  <NavLink
                  to="/booking"
                  state={{ bike }}
                  className="book-now-btn"
                >
                  BOOK NOW
                </NavLink>
                
              </div>
            ))
          ) : (
            <p>No bikes match your filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 


 