import React, { useState } from 'react';
import '../Css/Login.css';
import foodfix from '../Images/foof-fix.webp';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    const [logdata, setLogdata] = useState(
        {
            username: "",
            password: "",
            role: "",
        }
    );
    const [formData, setFormData] = useState({ 
        username: "", 
        userId: "", 
        role: "", 
        email: "", 
        password: "", 
        confirmPassword: "" 
    });

    //Handle Login data to usestate
    const handleLogdata = (e) => {
        setLogdata({ ...logdata, [e.target.name]: e.target.value });
    }
    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Login (Axios POST)
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // alert("Login data: " + JSON.stringify(logdata)); // Show login data
            const response = await axios.post("http://localhost:8080/api/login", { 
                username: logdata.username, 
                password: logdata.password,
                role: logdata.role
            });
            alert(response.data); // Show response from backend

            // Optional: Role-based redirection
            if (logdata.role === "admin") {
                navigate('/adminPanel');
            } else {
                navigate('/mmenu');
            }

        } catch (error) {
            console.error("Login error:", error);
            alert(error.response.data); // Show error message from backend
            alert("Login failed!");
        }
    };

    // Handle Signup (Axios POST)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/signup", formData);
            alert(response.data); // Show response from backend
            navigate('/');
        } 
        catch (error) {
            console.error("Signup error:", error);
            alert(error.response.data); // Show error message from backend
        }
    };

    return (
        <div id='lg-bdy'>
            <div id='lg-inbdy'>
                <div id='lg-img'>
                    <div>
                        <img src={foodfix} alt="food-fix" />
                    </div>
                </div>
                <div id="flip-container" className={isFlipped ? 'flipped' : ''}>
                    <div id="flipper">
                        {/* Front Side (Login Form) */}
                        <div id='lg-form' className="form-side">
                            <form onSubmit={handleLogin}>
                                <div id="lg-head">
                                    <span>LOGIN PAGE</span>
                                </div>
                                <div id='lg-inputs'>
                                    <input type="text" name="username" id="lg-username" placeholder='Username' required onChange={handleLogdata} /><br />
                                    <input type="password" name="password" id="lg-password" placeholder='Password' required onChange={handleLogdata} /><br />
                                    <select name="role" id="lg-role" required onChange={handleLogdata}>
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="student">Student</option>
                                    </select><br />
                                </div>
                                <div id="lg-btn">
                                    <button type='submit'>Login</button>
                                </div>
                            </form>
                            <div id='lg-btm'>
                                <span>Don't have an account?</span>
                                <button onClick={() => setIsFlipped(true)}>Signup</button>
                            </div>
                        </div>

                        {/* Back Side (Signup Form) */}
                        <div id='sg-form' className="form-side">
                            <form onSubmit={handleSubmit}>
                                <div id='sg-head'>SIGNUP PAGE</div>
                                <div id='sg-inputs'>
                                    <input type="text" name="username" id="sg-username" placeholder='Username' required onChange={handleChange} /><br />
                                    <input type="text" name="userId" id="sg-userid" placeholder='UserId' required onChange={handleChange} /><br />
                                    <select name="role" id="sg-roll" required onChange={handleChange}>
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="student">Student</option>
                                    </select><br />
                                    <input type="email" name="email" id="sg-email" placeholder='Email' required onChange={handleChange} /><br />
                                    <input type="password" name="password" id="sg-password" placeholder='Password' required onChange={handleChange} /><br />
                                    <input type="password" name="confirmPassword" id="sg-cpassword" placeholder='Confirm Password' required onChange={handleChange} /><br />
                                </div>
                                <div id='sg-btn'>
                                    <button type='submit'>Sign Up</button>
                                </div>
                                <div id='sg-btm'>
                                    <span>Already have an account?</span>
                                    <button onClick={() => setIsFlipped(false)}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
