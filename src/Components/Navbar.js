import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (
  
         
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Pizza Shop</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav mr-auto me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item"> 
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">ContactUs</NavLink>
            </li>
          
          </ul>
          <form className="d-flex my-right">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
     
    
    )
}

export default Navbar;
