const express =require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const { Schema } = mongoose;

require('dotenv').config();

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/loginDB');
    console.log('Database Connected');
}

const blogSchema = new Schema({
    username:String,
    password:String
});

const User=mongoose.model('User',blogSchema)


const server=express();


server.use(cors());
server.use(bodyParser.json());

server.get('/demo',async(req,res)=>{
//    res.send("hello");
    const docs=await User.find({})
    res.json(docs)
})

server.post('/demo',async (req,res)=>{

    let user=new User();
    user.username = req.body.username;//req.body aaya h front end se
    user.password = req.body.password;
    const doc= await user.save();


    console.log(doc);
    res.json(doc);
})



server.listen(process.env.PORT,()=>{
    console.log("Server Has Been Started On Port Number 9000")
})