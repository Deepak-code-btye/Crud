import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});

const User = mongoose.model("users", userSchema);
export default User;
