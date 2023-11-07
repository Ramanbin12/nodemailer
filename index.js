const express=require('express')
const app=express()
const nodemailer=require("nodemailer")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "chaitanyamailer@gmail.com",
        pass: "lvwi mjcl jauy oyek",
    }
});
app.get("/",async(req,res)=>{
    let info=await transporter.sendMail({
        from: 'chaitanyamailer@gmail.com', 
        to: "ramamsaini1297@gmail.com", 
        subject: "Hello raman", 
        text: "Hello raman saini", 
    
    })
    console.log("Message sent: %s", info.messageId);
    res.json(info)
})
app.listen(4000,()=>{
    console.log("installed sucessfully")
})