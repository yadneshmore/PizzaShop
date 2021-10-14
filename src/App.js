import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import './App.css';

import Home from './Components/Home';
import About from './Components/About';
//import Product from './Components/Product';
import ContactUs from './Components/ContactUs';

import Products from './Components/Products';

import {Switch, Route, Redirect} from "react-router-dom";
function App() {
  return (
    <>

  <Switch>
   
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/products" component={Products}/>
<Route exact path="/contactus" component={ContactUs}/>
<Redirect to="/"/>

    </Switch>
    
    </>
    
   
  );
}

export default App;
