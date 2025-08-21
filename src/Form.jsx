import React, { useState } from 'react';
import "./Form.css"
import InputForm from './InputForm';
 



const cities = [
  { name: "Chennai", img: "/chennai.jpg" },
  { name: "Kolkata", img: "/Kolkata.jpg" },
  { name: "Delhi", img: "/Delhi.jpg" },
  { name: "Mumbai", img: "/Mumbai.jpg" },
  { name: "Amedabad", img: "/Amedabad.jpg" },
  { name: "Pune", img: "/pune.jpg" },
  {name:"Grurgram",img:"/Gurugram.jpg"},
  {name:"Hydrabad",img:"/Hydrabad.jpg"},
  {name:"Navi-Mumbai",img:"NaviMumbai.jpg"},
  {name:"Jaipur",img:"/Jaipur.jpg"}



];

const Form = ({ onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityerror, setcityerror] = useState("");



  const handleSelect = (cityName) => {
    setSelectedCity(cityName);
    setIsOpen(false);
    onCityChange && onCityChange(cityName);
  };

  return (
    <> 
     
    <div className="rental"> 
   <div className="p" style={{marginLeft:"30px"}}> <p>Two Wheelers Rentals</p>
    <h2>Freedom To Move</h2>
    <p>Presenting the safe, reliable and affordable mobility solution</p></div>
      <div className="imagess">
       
      </div>
    </div>
    <div className="city-picker-wrapper ">
          <label htmlFor="text">Select Your city</label>
      <div id='city-input'>
        <input
          type="text"
          placeholder="Select city"
          value={selectedCity}
          onClick={() => setIsOpen(true)}
          className="form-control"
          id='inputbox'
        />
        <div className="error">
          {cityerror && <p style={{ color: "red" }}>{cityerror}</p>}
        </div>
        <div className="bigbox">
          <label htmlFor="text">Select your receive date</label>
          <InputForm
            selectedCity={selectedCity}
            setCityError={setcityerror}
          />
        </div>



      </div>
     
       



      {isOpen && (
        <div className="city-modal">
          <h3>Choose your city</h3>
          <div className="city-grid">
            {cities.map((city, index) => (
              <div key={index} className="city-card" onClick={() => handleSelect(city.name)}  >
                <img src={city.img} alt={city.name} width={120} height={120} id='image' />
                <p>{city.name}</p>
              </div>
            ))}
          </div>
          <button type="button" className="btn btn-warning ms-3 mt-4" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}

    </div>
    
      
   
     
    </>
  );
};
 

export default Form;


