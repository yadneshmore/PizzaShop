import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import  { useState } from 'react'
const ContactUs = () => {
  const [data,setdata]=useState({
    name:'',
    Number:'',
    Email:'',
    msg:'',
  });

  const formSubmit=(event)=>{
    event.preventDefault();
  };
    return (
      <div>
        <div>
         <Navbar/>

         <div className="container py-4">
         <div className="my-2">
               <h1 className="text-center">Contact Us</h1>
               </div>
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       
           <form onSubmit={formSubmit}>          
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" 
    
    value={data.name}
    onChange={e=>setdata({...data, name:e.target.value})} 
    placeholder="Enter Your Name"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
    <input type="number" className="form-control" id="exampleInputContact Number" aria-describedby="emailHelp" 
    
     value={data.Number}
     onChange={e=>setdata({...data, Number:e.target.value})}  
    placeholder="mobile number"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  
    
     value={data.Email}
     onChange={e=>setdata({...data, Email:e.target.value})} 
    placeholder="Enter Your Email"/>
    </div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Subject</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  

  value={data.msg}
  onChange={e=>setdata({...data, msg:e.target.value})} 
 placeholder="Message"></textarea>
</div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{data.name}
{data.Number} 
{data.Email}
{data.msg}                        
                       </div>
                   </div>
        </div>
        
        </div>
        <Footer/>
        </div>
    )
}

export default ContactUs
