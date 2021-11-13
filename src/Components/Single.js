import React from 'react'
import Sdata from './Sdata'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
  const Single = ({match}) => {
    console.log(match.params.id)
console.log(Sdata)
 const product=Sdata.find((p)=>(Number(p.id) === Number(match.params.id)));
   
   return(
<div>
  <Navbar/>
   <Link to="/products">Go Back</Link>
  
  <div className="container p-5">
    <div className="row py-5">
      <div className="col-lg-12">
<div className="card ">

<img className="card-img-top" src={product.src} alt="cap" />
<div className="card-body ">
<h5 className="card-title">{product.title}</h5>
    <h6 className="price"> {product.price}</h6>
    <p className="card-text">                
     {product.text}                
     </p>
     <button  href="" className="btn mt-2 btn-primary">{product.btn}</button>
     </div>
     </div>
     </div>
     </div>
     </div>
</div>

    )
  }


export default Single
 