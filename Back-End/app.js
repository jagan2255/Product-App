const express = require("express");
const app = express();
const cors = require("cors")

const PORT = process.env.PORT || 3000;
const productdata = require("./src/model/productmodel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/" , (req,res)=>{
    res.send(`Server Running on PORT ${PORT}`)
})

app.get('/products' , (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  
    productdata.find()
    .then((data=>{
        res.send(data)
    }))

});

app.post("/add" , (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    

    console.log(req.body);

    products={
        code:req.body.product.code,
        productname:req.body.product.productname,
        available:req.body.product.available,
        rating:req.body.product.rating,
        price:req.body.product.price,
        imageurl:req.body.product.imageurl
    }
      var products = new productdata(products);
      products.save();
})

app.listen(PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`);
});