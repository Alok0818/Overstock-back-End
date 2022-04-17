const express = require("express")

const User=require("../models/user.model") 

const router = express.Router()
router.get("", async(req,res)=>{
    try{
        const users=await User.find().lean().exec()
        return res.render("account.ejs")
       
    }catch(err){

    }
})

module.exports=router