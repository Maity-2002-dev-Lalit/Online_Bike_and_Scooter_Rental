// import React from 'react';
// import { useState } from 'react';
// import './Signin.css';
// import { NavLink } from 'react-router-dom';

// const Signin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Signed in with:', formData);
//     alert("Signed in successfully");
//   };

//   return (
//     <div className="signin">
//       <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
//         <form className="p-4 border rounded bg-light shadow" onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
//           <h3 className="text-center mb-4">Sign In</h3>

//           <div className="mb-3">
//             <label className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="d-grid mb-3">
//             <button type="submit" className="btn btn-primary">Sign In</button>
//           </div>


//           <p className="text-center" style={{ fontSize: "14px" }}>
//             Don't have an account?{' '}
//             <NavLink to="/signup" style={{ textDecoration: "underline", fontWeight: "600", color: "#000" }} >
//               Sign Up
//             </NavLink>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
 

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "./Signin.css";

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const result = await signin(formData);
      
      if (result.success) {
        alert("Signed in successfully");
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Failed to sign in');
    }
    
    setLoading(false);
  };

  return (
    <div className="signin">
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <form className="p-4 border rounded bg-light shadow" onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
          <h3 className="text-center mb-4">Sign In</h3>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="Enter email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
          
          <p className="text-center" style={{ fontSize: "14px" }}>
            Don't have an account?{' '}
            <NavLink to="/signup" style={{ textDecoration: "underline", fontWeight: "600", color: "#000" }}>
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;