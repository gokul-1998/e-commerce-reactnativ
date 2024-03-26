const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    products: [
        {
        name:{
            type:String,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            required:true,
        }
    },

    ],
    totlaPrice:{
        type:Number,
        required:true,
    },
    shippingAddress:{
        name:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:String,
        require:true,
    },
    houseNo:{
        type:String,
        require:true,
    },
    street:{
        type:String,
        require:true,
    },
    landmark:{
        type:String,
        require:true,
    },
    postalCode:{
        type:String,
        require:true,
    },
    
    },

    paymentMethod:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


    });

const Order= mongoose.model("order",orderSchema);

module.exports=Order;