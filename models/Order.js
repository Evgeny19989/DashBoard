const mongoose = require("mongoose");

const {Schema} = mongoose;

const orderSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
   list:[
       {
           name:{
               type:String
           },
           quantity:{
               type:Number
           },
           cost:{
               type:Number
           }
       }
   ],
    user:{
        ref: "users",
        type: Schema.Types.ObjectId
    }

})

module.exports = mongoose.model('orders', orderSchema)
