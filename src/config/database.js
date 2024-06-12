const mongoose=require("mongoose");

// twitter_Dev is the name of the mongoDB database with which moongoose is connected
// We are connecting to the mongoDB server
const connect=async ()=>{
    await mongoose.connect("mongodb://localhost/twitter_Dev");
}

module.exports=connect;