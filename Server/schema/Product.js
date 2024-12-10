const mongoose = require('mongoose');
const schema = mongoose.Schema

const productSchema = new schema({
    title:String,
    desc:String,
    colors:Object,
    sizes:String,
    count:Number

})


const Product = mongoose.model("Product" , productSchema)

module.exports = Product;