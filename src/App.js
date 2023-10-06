import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import Home from './Home/Home'
import UserLogin from './Home/UserLogin'
import UserRegistration from './Home/UserRegistration'
import AdminLogin from './Home/UserLogin';
import Service from './Home/Service';



function App() {
  return (
    <>
<Router>
      <div>
<Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/user/login" element={<UserLogin/>} />
          <Route exact path="/user/register" element={<UserRegistration />} />
          <Route exact path="/services" element={<Service />} />

            <Route exact path="admin/login" element={<AdminLogin />} />

            
          </Routes>

      </div>
    </Router>


  </>
  );
}

export default App;
