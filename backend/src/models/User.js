const mongoose = require("mongoose");

require("../lib/mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

// const user_new = new User({
//   name: "John Doe",
//   email: "johndoe@gmail.com",
//   password: "password123",
//   role: "user",
// });

// const saveUser = async () => {
//   await user_new.save();
// };

// saveUser();

module.exports = User;
