const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:  {type:String,
            required: [true, 'Field required'],
            minlength: [3, 'Length must be at least 3 characters']
            },
    price:  { type:Number,
            required: [true, 'Field required']
            },
    description:{   type:String,
                    required: [true, 'Field required'],
                    minlength: [3, 'Length must be at least 3 characters']
                }

},{timestamps:true})


module.exports.Product = mongoose.model("Product",ProductSchema);