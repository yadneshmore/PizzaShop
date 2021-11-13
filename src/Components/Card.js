import React from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'



const Card = ({product}) => {
 
    return (
       <>  
           
         <div className="col-lg-4 mt-3">
        
             <div className="card h-100">
              
  <img className="card-img-top" src={product.src} alt="cap"/>
  <div className="card-body ">
    <h5 className="card-title">{product.title}</h5>
    <h6 className="price"> {product.price}</h6>
    <p className="card-text">                
     {product.text}                
     </p>
     <Link to={`/product/${product.id}`}>
    <button  href="" className="btn mt-2 btn-primary">{product.btn}</button>
    </Link>
    </div>
 
   
  </div>
  
</div>

</>

    )
}

export default Card

