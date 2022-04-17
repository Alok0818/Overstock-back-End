const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
  {
   
    
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);





const User = mongoose.model("user", userSchema); // user => users
module.exports = User;