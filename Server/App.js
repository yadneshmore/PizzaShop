const express = require('express');
const app = express();
const Sdata = require('./Sdata')
const middleware = (req,res,next) => {
    console.log("pari");
    next();
}
app.get('/', middleware, (req,res) =>{
res.send("ya");
});
app.get('/about', middleware, (req,res) =>{
    res.send('hello shreesha bab');
    });
app.get('/products', middleware, (req,res) =>{
    res.send('products');
});
app.use('./Sdata')
app.get('/Sdata', middleware, (req,res) =>{
    res.sendFile(__dirname +'/Sdata.js');
    });
app.get('/product/:id', middleware, (req,res) =>{
    const product=Sdata.find((p)=>(Number(p.id) === Number(match.params.id)));
    res.send('product');
});
app.get('/contactus', middleware, (req,res) =>{
res.send(' yadnesh');
});

app.listen(9000,()=>{
    console.log("more yadne");
})