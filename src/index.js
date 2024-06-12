const express=require("express");
const app= express();
const connect=require("./config/database");
// const Tweet=require("./models/tweet");
const Comment=require("./models/comment");

const TweetRepository=require("./repository/tweet-repository");
const tweetrepo=new TweetRepository();

app.listen(3000,async ()=>{
    console.log("Server Started");
    await connect();
    console.log("MongoDB connected");
    const tweet=await tweetrepo.getWithComments("66698120337beb30276b8078");
    console.log(tweet);
});





// const tweet= await tweetrepo.create({content:"One MoreTweet with comment schema"});
// const comment= await Comment.create({content:"previous comment"});
// console.log(tweet);
// tweet.comments.push(comment);
// await tweet.save();
// console.log(tweet);

//    const tweet= await tweetrepo.create({
//         content:"Changed Comments are there in tweet without associations",
//         userEmail:"S@.com",
//         comments:[
//             {
//                 content:"First Tweet"
//             }
//         ]
//     });
//     console.log(tweet);
//     tweet.comments.push({content:"Second comment"});
//     await tweet.save();
//     console.log(tweet);

// Updating a tweet and returning the updated tweet
// const tweet= await tweetrepo.update("66683070107275bcbb0035e6",{content:"Updated Tweet"});
// console.log(tweet);

// In MongoDB we cannot add random new properties (new keys ) 
// without making changes to the existing schemas.It strictly follows schema

//    const tweet= await Tweet.findById("666830c813ec32a949c31802");
//    tweet.userEmail="somnath@gmail.com";
//    tweet.newPropertyTesting="Shobhit";
//    await tweet.save();

// const tweet=await Tweet.create({
//     content:"Third Tweet",
// });
// console.log(tweet);