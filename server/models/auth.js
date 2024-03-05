import mongoose from "mongoose";

//users database
const userSchema = mongoose.Schema({
  name:{type:String , required:true},
  email:{type:String , required:true},
  password:{type:String , required:true},
  about:{type:String },
  tags:{type:[String] },
  joinedOn:{type:Date , default:Date.now} //whenever user will create the databse, databse will recognize the time and autofill it 

})

export default mongoose.model("User", userSchema) 