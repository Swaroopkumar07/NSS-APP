const express = require("express");
const app = express();
const cors = require("cors");

const EventModel=require('./models/EventSchema')
const DocumentModel=require('./models/DocumentSchema')
const AccountModel = require("./models/AccountSchema");
const VolunteersModel = require('./models/VolunteerSchema')
app.use(cors());
app.use(express.json())

const { default: mongoose } = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/NSS?readPreference=primary&appname=MongoDB%20Compass&ssl=false").then(()=>{
    console.log("MDB")}).catch((err)=>{console.log("Error")});


app.get("/data",async(req,res)=>{
    const data =await LoginModel.find();
    res.json(data)
})

app.post("/login",async(req,res)=>{
    const {Email,Password}=req.body
    AccountModel.findOne({Email:Email}).then((user)=>{
       if(user.Email){
            if(Password===user.Password){
                res.send({message:"Login Succesful",user:user})
            }
            else{
                res.send({message:"Incorrect Password"})
            }
        }
            else{
            res.send({message:"Email Not FOund"})
        }
        
    })

})

app.post("/event",(req,res)=>{
    const {EventName,EventLink} = req.body
    const user = new EventModel({EventName:EventName,EventLink:EventLink})
    user.save().then((res1)=>{
         if(res1.EventName){
            res.send({message:"Event Uploaded Successfully"})
         }
         else{
            res.send({message:"Error Occured"})
         }
    })
})

app.get("/eventData",async (req,res)=>{
    const data = await EventModel.find()
    res.json(data)
})

app.post("/document",(req,res)=>{
    const {DocumentName,DocumentLink} =req.body
    const user = DocumentModel({DocumentName:DocumentName,DocumentLink:DocumentLink})
    user.save().then((res2)=>{
        if(res2.DocumentName){
            res.send({message:"Document Uploaded Successfully"})
        }
        else{
           res.send({message:"Error Occured"})
        }

    })
})

app.post("/volunteer",(req,res)=>{
    const {Year,VoulList} =req.body
    const user = VolunteersModel({Year:Year,VoulList:VoulList})
    user.save().then((res2)=>{
        if(res2.Year){
            res.send({message:" Uploaded Successfully"})
        }
        else{
           res.send({message:"Error Occured"})
        }

    })
})


app.get("/documentData",async(req,res)=>{
    const data = await DocumentModel.find()
    res.json(data)
})
   
 
app.post('/signup',async(req,res)=>{ 
    // const {Name,Email,Password,Branch,Section,Year,Unit} = req.body
    const Name=req.body.Name
    const Email=req.body.Email
    const Password=req.body.Password
    const Branch=req.body.Branch
    const Section=req.body.Section
    const Year=req.body.Year
    const Unit=req.body.Unit

    const User = await AccountModel({Name,Email,Password,Branch,Section,Year,Unit})
    User.save().then((res3)=>{
        if(res3.Email){
            res.send({message:"Account Created"})
        }  
        else{
            res.send({message:'Error Occured'})
        }

    })

})




app.listen(4000,()=>{
  console.log("running")
})