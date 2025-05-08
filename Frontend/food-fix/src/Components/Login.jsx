import React, { useState } from 'react';
import '../Css/Login.css';
import foodfix from '../Images/foof-fix.webp';
// import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
// import Mmenu from './Mmenu';

export default function Login() {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleLogin = () => {
        navigate('mmenu');
    }

    const handleSubmit = () => {
        navigate('/');
    }

    const flipToSignup = () => {
        setIsFlipped(true);
    };

    const flipToLogin = () => {
        setIsFlipped(false);
    };

    return (
        <div id='lg-bdy'>
            <div id='lg-inbdy'>
                <div id='lg-img'>
                    <div>
                        <img src={foodfix} alt="" />
                    </div>
                </div>
                    <div id="flip-container" className={isFlipped ? 'flipped' : ''}>
                        <div id="flipper">
                            {/* Front Side (Login Form) */}
                            <div id='lg-form' className="form-side">
                                <form action="">
                                    <div id="lg-head">
                                        <span>LOGIN PAGE</span>
                                    </div>
                                    <div id='lg-inputs'>
                                        <input type="text" id="lg-username" placeholder='Username' required /><br />
                                        <input type="text" id="lg-userid" placeholder='UserId' required /><br />
                                        <select name="lg-roll" id="lg-roll" required>
                                            <option value="lg-roll">Select Roll</option>
                                            <option value="lg-admin">Admin</option>
                                            <option value="lg-student">Student</option>
                                        </select><br />
                                        <input type="email" id="lg-email" placeholder='Email' optional /><br />
                                        <input type="password" id="lg-password" placeholder='Password' required /><br />
                                    </div>
                                    <div id="lg-btn">
                                        <button type='submit' onClick={handleLogin}>Login</button>
                                    </div>
                                </form>
                                <div id='lg-btm'>
                                    <span>Don't have an account?</span>
                                    <button onClick={flipToSignup}>Signup</button>
                                </div>
                            </div>

                            {/* Back Side (Signup Form) */}
                            <div id='sg-form' className="form-side">
                                <form action="">
                                    <div id='sg-head'>SIGNUP PAGE</div>
                                    <div id='sg-inputs'>
                                        <input type="text" id="sg-username" placeholder='Username' required /><br />
                                        <input type="text" id="sg-userid" placeholder='UserId' required /><br />
                                        <select name="sg-roll" id="sg-roll" required>
                                            <option value="sg-roll">Select Roll</option>
                                            <option value="sg-admin">Admin</option>
                                            <option value="sg-student">Student</option>
                                        </select><br />
                                        <input type="email" id="sg-email" placeholder='Email' required /><br />
                                        <input type="password" id="sg-password" placeholder='Password' required /><br />
                                        <input type="password" id="sg-cpassword" placeholder='Confirm Password' required /><br />
                                    </div>
                                    <div id='sg-btn'>
                                        <button type='submit' onClick={handleSubmit}>Sign Up</button>
                                    </div>
                                    <div id='sg-btm'>
                                        <span>Already have an account?</span>
                                        <button onClick={flipToLogin}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}