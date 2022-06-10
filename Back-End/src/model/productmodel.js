const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/Product")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    code: String,
    productname:String,
    available:Boolean,
    price:Number,
    rating:Number,
    imageurl:String
})

const productdata = mongoose.model("productdata" , ProductSchema)
module.exports = productdata