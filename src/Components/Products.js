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
           Sdata.map((val,inde)=>{
               return <Card key={inde} src={val.src}
               title={val.title}
               price={val.price}
               text={val.text}
               btn={val.btn}/>
           })
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
