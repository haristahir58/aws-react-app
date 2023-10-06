import React from 'react'
import {useState} from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, NavLink, useNavigate} from "react-router-dom";
import '../Home/Style/Auth.css';

const RegisterUser = () => {
    
  return (
    <>
    <Navbar/>
    <section className='signup'>
    <div className='container mt-6'>
        <div className="signup-content">
            <div className="signup-form">
                <h2 className='form-title'>Sign up</h2>
                <form method='POST' className='register-form' id='register-form'>
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">
                        <i class="zmdi zmdi-account material-icons-name"></i>
                        </label>

                        <input type="text" name="name" id="name" autoComplete='off' 
                        placeholder='Your Name'/>   
                    </div>

                 
                    <div className="form-group">
                        <label htmlFor="email">
                        <i class="zmdi zmdi-email material-icons-name"></i>
                        </label>

                        <input type="email" name="email" id="email" autoComplete='off' 
                        placeholder='Your Email'/>   
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>

                        <input type="password" name="password" id="password" autoComplete='off' 
                        placeholder='Your Password'/>   
                    </div>

                    <div className="form-group">
                        <label htmlFor="regNo">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>

                        <input type="text" name="regNo" id="regNo" autoComplete='off' 
                        placeholder='Enter Registration Number'/>   
                    </div>


                    <div className="form-group">
                        <label htmlFor="phoneNo">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>

                        <input type="number" name="phoneNo" id="phoneNo" autoComplete='off' 
                        placeholder='Enter Phone Number'/>   
                    </div>

                    <div className="formInput">
                    <label>
                        Image:
                        <input type="file" name="image"  />
                    </label>
                    </div>

                    <div className="form-group">
                        <input type="submit" name='signup' id='signup' className='form-submit' 
                        /> 
                        <p className='login-link my-3'>Already have an account? <Link
                        to='/user/login'>Login</Link></p>
                    </div>
                    </div>
                 


                </form>
                </div>
            

   
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default RegisterUser