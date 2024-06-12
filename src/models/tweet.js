const mongoose=require("mongoose");

//Whenever we make changes to the tweetSchema then changes get reflected in
// new documnents which are going to be created or existing documnents if modified 
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
            // We will have the comments inside the comments array but
            // in database we will have only The objectId of the comments Document
            // so in order to get comments we will need to populate it
        }
    ]
},
{timestamps:true});

const Tweet=mongoose.model("Tweet",tweetSchema);
module.exports=Tweet;