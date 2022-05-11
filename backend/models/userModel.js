const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name : {
        type:String,
        require:[true, "Please provide User name"]
    },
    email : {
        type:String,
        require:[true, "Please provide email address"],
        unique:true
    },
    password : {
        type:String,
        require:[true, "Please provide your password"]
    },
   
}, {timestamps: true})



module.exports = mongoose.model("User", userSchema)