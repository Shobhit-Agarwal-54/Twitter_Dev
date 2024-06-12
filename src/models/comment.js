const mongoose=require("mongoose");

//Whenever we make changes to the tweetSchema then changes get reflected in
// new documnents which are going to be created or existing documnents if modified 
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    },
},
{timestamps:true});

const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;