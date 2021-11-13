import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card';
import Sdata from './Sdata';

const Products = () => {
    return (
        <div>
          <Navbar/>  
          <div className="container">
            <div className="row">   
        <div className="col-lg-12 py-4 m-auto text-center">
       <h2>Pizzas Of Pizza Shop</h2>
       </div>
</div>
  </div>

<div className="container py-4">
  <div className="row ">
  <div className="col-lg-12  ">
  <div className="card-deck">

       {
           Sdata.map((product)=> (<Card key={product.id}  product={product}/>))
       }       
        

  </div>
   </div>
   </div>
  </div>
 
<Footer/>
</div>
   
    )
}

export default Products
