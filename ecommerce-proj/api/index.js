const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const crypto = require("crypto")
const nodemailer = require("nodemailer")

//  to import  from .env
require('dotenv').config();

const app = express()
const port = 8000
const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const baseurl="http://192.168.229.57:8000/"

const jwt = require("jsonwebtoken")


mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true}).then(() => {
    console.log("DB connected")
}).catch((err) => {

    console.log("DB not connected", err)
})



const User= require("./models/user");
const Order=require("./models/order");

const generateSecretKey=()=>{
    return crypto.randomBytes(20).toString("hex");

}

const  secretKey=generateSecretKey();

// function to send  Verification email  to the user

const sendVerificationEmail= async(email,verificationToken)=>{
    // create a nodemailer transport

    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"gokulakrishnanm1998@gmail.com",
            pass:process.env.APP_PWD
        }

    })

    const mailOptions={
        from:"amazon.com",
        to:email,
        subject:"Email verification",
        text:`Please click the following link to verify your email : ${baseurl}verify/${verificationToken}`
    };


    // send  the email
    try{

        await  transporter.sendMail(mailOptions)
    }
    catch(error){
        console.log("Error sending verification email",error)
    }

}


app.get("/", (req, res) => {
    res.send("Hello World")
}
)


// endpoint to register in the  app sad 



app.post("/register",async(req,res)=>{
    try{
        console.log("registering user",req.body);
        const {name,email,password}=req.body;
        const existingUser = await User.findOne({email});
        if (existingUser){
            console.log("email already registered")
            return res.status(400).json({
                message:"Email already Registered"
            });
        }
        console.log("creating new user")
        const newUser = new User({name,email,password});

        newUser.verificationToken=crypto.randomBytes(20).toString("hex");

        // save  the user to the database
        await newUser.save();


        // send verification email to the user
        sendVerificationEmail(newUser.email,newUser.verificationToken)

        res.status(201).json({message:"User registered successfully. Please verify your email to login"})


        console.log("email sent")
        //  check if email is already registered
    }
    catch(error){
        console.log("error registering user",error);
        res.status(500).json({message:"Registration failed"})
    }
})


//  endpoint  to  verify the user
app.get('/verify/:token',async(req,res)=>{
    try{
        const token=req.params.token;
        //  find the  user  with the give  verification  token

        const user=await User.findOne({verificationToken:token});
        if (!user){
            return res.status(404).json({message:"Invalid verification token"})
        }
        user.verified=true;
        user.verificationToken=undefined;

        await user.save();

        res.status(200).json({message:"email verified successfully"})

    } catch(error){
        res.status(500).json({message:"Rmail Verification failed"});
    }
})

// endpoint  to login the  user
app.post("/login",async(req,res)=>{
    console.log("inside login")
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        console.log("user",user)
        if (!user){
            return res.status(404).json({message:"User not found"})
        }
        if (!user.verified){
            return res.status(400).json({message:"Email not verified"})
        }
        if (user.password!==password){
            return res.status(400).json({message:"Invalid password"})
        }
        const token=jwt.sign({userId:user._id},
            secretKey,
            {expiresIn:"1h"});
        res.status(200).json({token})
    }
    catch(error){
        res.status(500).json({message:"Login failed"})
    }
}
)


// endpoint to store new address

app.post("/addresses",async(req,res)=>{
    try{
        const {userId,address}=req.body;
        // find the user by user id 

        const user=await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found"}) 
        }
        // add the new address to users addresses array 
        user.addresses.push(address);

        // save the updated user in the backed
        await user.save();

        res.status(200).json({message:"Address added successfully"})

    }
    catch(error){
        res.status(500).json({message:"Failed to add address"})
    }
}) 



// endpoint to get all addresses of  the user
app.get("/addresses/:userId",async(req,res)=>{
    try{
        const userId=req.params.userId;

        const user=await User.findById(userId)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const addresses=user.addresses;
        res.status(200).json({addresses})
    }
    catch(error){
        res.status(500).json({message:"Failed to get addresses"})
    }
})

app.listen(port, () => {
    console.log("Server is running on port", port)
}
)
//  to make this accessible to my phone  i need to change the localhost to my ip address
//  or make it run on all ip address by changing the localhost to