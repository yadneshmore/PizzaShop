import React from 'react'
import Navbar from './Navbar';
import Menu from './Menu';
import Footer from './Footer';
const Home = () => {
    return(
    <div>
   
        <div className="Container-fluid">
        <div className="home">
        <Navbar/>
 
        
     <h1 className="heading">Pizza Shop</h1>
   
     <p className="para"> Here You Will Gate Best Quality Of Pizza</p> 
     <div className="home__btn">
              <a href="/products" className="home1_btn btn-primary">
                Oreder Now
              </a> 
             
    </div>
    
   </div>
   </div>
  <Menu/> 
  <Footer/>
    </div>
    
         
    )
}

export default Home;