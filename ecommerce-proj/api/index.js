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


const baseurl="http://192.168.21.57:8000/"

const jwt = require("jsonwebtoken")


mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true}).then(() => {
    console.log("DB connected")
}).catch((err) => {

    console.log("DB not connected", err)
})



const User= require("./models/user");
const Order=require("./models/order");


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




app.listen(port, () => {
    console.log("Server is running on port", port)
}
)
//  to make this accessible to my phone  i need to change the localhost to my ip address
//  or make it run on all ip address by changing the localhost to