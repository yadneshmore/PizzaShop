import React from 'react'
import Navbar from './Navbar'
import img1 from "../images/pizza.jpg"
import Footer from './Footer'
const About = () => {
    return (
        <div>
           <Navbar/> 
        
               <div className="container py-4">
               <div className="row">
               <div className="col-lg-12 py-3 ">
                   <div className="my-2">
               <h1 className="text-center">About Us</h1>
               </div>
                   </div>
                   <div className="col-md-6 py-5">
                  
            <p className="text-justify center">
                 At Pizza Shop, We don't just make pizza.We make people happy.
                 Pizza Shop was built on the belief that pizza night should be
                 special, and we carry that belief into everything we do. We 
                 understand how to best Serve our customers through tried and true
                 service principles.We create food We're proud to serve and deliver
                 it fast, with a smile.

                         </p>
                           
                      </div>
                      <div className="col-md-6 py-4">
                          <img src={img1} className="img-fluid" alt="yadn"/>
                     
                   </div>
                   </div>

               </div>
               <Footer/>
           </div>
      
    )
}

export default About
