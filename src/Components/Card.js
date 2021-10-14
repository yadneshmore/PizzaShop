import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'



const Card = (props) => {
    return (
       <>        
         <div className="col-lg-4 mt-3">
         
             <div className="card h-100 ">
               
  <img className="card-img-top" src={props.src} alt="cap"/>
  <div className="card-body ">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="price"> {props.price}</h6>
    <p className="card-text">                
     {props.text}                
     </p>
    <NavLink to="/products" className="btn mt-2 btn-primary">{props.btn}</NavLink>
  </div>
</div>
</div>

</>
    )
}

export default Card

