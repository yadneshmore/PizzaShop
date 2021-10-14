import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from "../images/spicy-pizza.jpg"
import img2 from "../images/Paneer-with-Capsicum.jpg"
import img3 from "../images/mushrom1.png"
import img4 from "../images/NVSuperme.jpg"
import img5 from "../images/piri chicken pizza.png"
import img6 from "../images/goldendelight.jpg"
const Product = () => {
    return (
        <div>
          <Navbar/>  
          <div className=" py-4">
          
            <div className="row ">
        <div className="col-lg-5 py-4 m-auto text-center">
       <h1>Weg Pizzas </h1>
</div>
</div>
    
          <div className="card-deck">

         <div className="col-lg-4 ">
         
             <div className="card h-100">
               
  <img className="card-img-top" src={img3} alt="Card image cap"/>
  <div className="card-body ">
    <h5 className="card-title">Mushroom Pizza</h5>
    <h6 className="price"> Price: 125Rs</h6>

    <p className="card-text">                
     Green chilli+ Freshroom+garlic Topped with Cheese                
     </p>
     
    <a href="#" className="btn  mt-5 btn-primary">Order</a>
  </div>
</div>

</div>


<div className="col-lg-4">
             <div className="card h-100" >
           
  <img className="card-img-top" src={img2} alt="Card image cap"/>
  <div className="card-body ">
    <h5 className="card-title">Paneer with Capsicum</h5>
    <h6 className="price"> Price: 225Rs</h6>
    <p className="card-text ">Paneer, capsicum, onion, garlic, pineapple, tomato, carrot, beans, jelepano, black pepper </p>
    <a href="#" className="btn mt-4 btn-primary">Order</a>
</div>

</div>
</div>

<div className="col-lg-4">
             <div className="card h-100" >
  <img className="card-img-top" src={img1} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Veg.Cheese Pizza</h5>
    <h6 className="price"> Price: 200Rs</h6>
    <p className="card-text"> Crunch of onions, fresh crisp of bell paper and tomato juices mingling with sauces and melting lava of cheese on a fluffy perfectly baked breads</p>
    <a href="#" className="btn mt-auto btn-primary">Order</a>
</div>
</div>
</div>
</div>
</div>




<div className="container py-4">
    <div className="row">
<div className="col-lg-5 py-4 m-auto text-center">
    <h1>Non-Weg Pizzas</h1>
    </div>
</div>
<div className="row">
<div className="card-deck">
         <div className="col-lg-4">
             <div className="card h-100" >
  <img className="card-img-top" src={img4} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Supreme Pizza</h5>
    <h6 className="price"> Price: 350Rs</h6>
    <p className="card-text">Supreme pizza is acrowd favorite,racipe to make supreme pizza is uses boxed hot llmix form
     the crust and is topped with sausage,pepperoni,onions,peppers,mushrooms and cheeses.</p>
    <a href="#" className="btn mt-auto btn-primary">Order</a>
  </div>
</div>
</div>


         <div className="col-lg-4">
             <div className="card h-100" >
  <img className="card-img-top" src={img5} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Piri-Piri Chicken Pizza</h5>
    <h6 className="price"> Price: 300Rs</h6>
    <p className="card-text"> In Chicken Piri-Piri Pizza Chicken marinated in a garlic, herbs and peri-peri seasoning is placed on the tomato sauce pizza base along 
    with fresh bell peppers, black olives. Topped with a delicious drizzle of pei-peri</p>
    <a href="#" className="btn mt-3 btn-primary">Order</a>
  </div>
</div>
</div>


         <div className="col-lg-4">
             <div className="card h-100" >
  <img className="card-img-top" src={img6} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Chicken Golden-Delight</h5>
    <h6 className="price"> Price: 225Rs</h6>
    <p className="card-text">Chicken Golden-Delight Pizza Filled with Barbeque Chicken and a topping pf Golden Corn loaded with Extra Cheese.</p>
    <a href="#" className="btn mt-5 btn-primary">Order</a>
  </div>
</div>
</div>

</div>
</div>
</div>
<Footer/>
</div>
   
    )
}

export default Product
