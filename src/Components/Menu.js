import React from 'react'
import { NavLink } from 'react-router-dom'
import img7 from "../images/california-style-pizza.png"
import img8 from "../images/classic-pizza-veg-check-mate.png"
import img9 from "../images/classic-pizzas-non-veg-fujitive.png"

const Menu = () => {
    return (
<div className="container py-4 ">
            <div className="row ">
        <div className="col-lg-5 py-4 m-auto text-center">
       <h1>What is Tranding</h1>
</div>
</div>
       <div className="row ">
       <div className="card-deck ">
         <div className="col-lg-4">
             <div className="card h-100" >
  <img className="card-img-top" src={img7} alt="cap"/>
  <div className="card-body">
    <h5 className="card-title">California-Style Chicken Pizza</h5>
    <h6 className="price"> Price: 300Rs</h6>
    <p className="card-text ">California-Style Chicken Pizza made with thawed frozen bread dough, is topped with dried tomatoes,Monterey jack cheese,and grilled chicken breasts, An easy subtitution would be the meat from a deli-roasted chicken </p>
    <NavLink to="" className="btn mt-3 btn-primary">Order</NavLink>
  </div>
</div>
</div>



<div className="col-lg-4">
    
    
             <div className="card h-100" >
  <img className="card-img-top" src={img8} alt="cap"/>
  <div className="card-body">
    <h5 className="card-title">classic-pizza-veg-check-mate</h5>
    <h6 className="price"> Price: 175Rs</h6>
    <p className="card-text">Recipe For classic-pizza-veg-check-mate is Diced Onions, Green Capsicum, Tomatoes,Basil and Seasoned Mozzarella.</p>
    <NavLink to="/" className="btn mt-5 btn-primary ">Order</NavLink>
</div>
</div>
</div>


<div className="col-lg-4">
      
    
             <div className="card h-100" >
  <img className="card-img-top" src={img9} alt=" cap"/>
  <div className="card-body">
    <h5 className="card-title">classic Pizzas Non-Veg Fujitive</h5>
    <h6 className="price"> Price: 445Rs</h6>
    <p className="card-text">Recipe for classic Pizzas Non-Veg Fujitive is Smoked Salami, Crushed Green Chillies, Onion Chunks, Diced Toma.</p>
    <NavLink to="/" className="btn  mt-5 btn-primary ">Order</NavLink>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}

export default Menu;
