import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Footer = () => {
    return (
        <div>
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/fontawesome.min.css" />
       
       <div className="Container">
  
            <div className="footer">
               
                <div className="inner-footer">
                    <div className="social-links">
                      
                    <ul>
                        <li className="social-items"><NavLink to="/"><i className="fab fa-facebook-square"></i></NavLink></li>
                        <li className="social-items"><NavLink to="/"><i className="fab fa-twitter-square"></i></NavLink></li>
                        <li className="social-items"><NavLink to="/"><i className="fab fa-instagram-square"></i></NavLink></li>
                        <li className="social-items"><NavLink to="/"><i className="fab fa-tumblr-square"></i></NavLink></li>
                        </ul>
                    </div>
                    
                    <div className="quick-links">
                        <ul className="mid">
                            <li className="quick-items"><NavLink to="/">Home</NavLink></li>
                            <li className="quick-items"><NavLink to="/about">About</NavLink></li>
                            <li className="quick-items"><NavLink to="/products">Product</NavLink></li>
                            <li className="quick-items"><NavLink to="/contactus">ContactUs</NavLink></li>
                            </ul>
                        </div>
                </div>
                <div className="outer-footer">
                    Copyright &copy; Yadnesh More. All Rights Reserved
                    </div>
            </div>
        </div>
        </div>
     
    )
}

export default Footer;

