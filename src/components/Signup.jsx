// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Signup.css"
// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
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
//     console.log('Signed up with:', formData);
//     alert("Signed up successfully");
//   };

//   return (
//     <div className="signup">
//       <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
//         <form className="p-4 border rounded bg-light shadow" onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
//           <h3 className="text-center mb-4">Sign Up</h3>

//           <div className="mb-3">
//             <label className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

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
//             <button type="submit" className="btn btn-success">Sign Up</button>
//           </div>

//           <p className="text-center" style={{ fontSize: "14px" }}>
//             Already have an account?{' '}
//             <Link to="/signin" style={{ textDecoration: "underline", fontWeight: "600", color: "#000" }}>
//               Sign In
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const result = await signup(formData);
      
      if (result.success) {
        alert("Signed up successfully");
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Failed to create an account');
    }
    
    setLoading(false);
  };

  return (
    <div className="signup">
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <form className="p-4 border rounded bg-light shadow" onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
          <h3 className="text-center mb-4">Sign Up</h3>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              placeholder="Enter your name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
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
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
          
          <p className="text-center" style={{ fontSize: "14px" }}>
            Already have an account?{' '}
            <Link to="/signin" style={{ textDecoration: "underline", fontWeight: "600", color: "#000" }}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;