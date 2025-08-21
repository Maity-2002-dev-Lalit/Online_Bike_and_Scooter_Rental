 

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Signin from './components/Signin';
import Subscription from './components/Subscription';
import Signup from './components/Signup';
import Dashboard from './Dashboard';
import Footer from "./Footer";
import Blogs from './components/Blogs';
import { AuthProvider } from './contexts/AuthContext';
import Booking from './Booking';
import "./App.css"
 
function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/signin';
  const hideFooter2 = location.pathname === '/signup';

  return (
    <AuthProvider>
      <div className="mycontainer">
        <Navbar />
        <div className="bigcontainer">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/signin' element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blogs' element={<Blogs />} />
             <Route path='/booking' element={<Booking />} />
        
          </Routes>
          {!hideFooter && !hideFooter2 && <Footer />}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;


