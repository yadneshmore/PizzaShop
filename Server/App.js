const express = require('express');
const App = express();

const middleware = (req,res,next) => {
    console.log("shvsiodfh");
    next();
}


App.get('/', (req,res) =>{
res.send('Hello Worl');
});

App.get('/about', middleware, (req,res) =>{
   
    res.send('Hello ld');
    });

App.get('/products', (req,res) =>{
res.send('Hello Wo');
});

App.get('/contactus', (req,res) =>{
res.send('Hello World');
});

App.listen(5001,()=>{
    console.log("ijwpfwe");
})