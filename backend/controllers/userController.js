const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
//@desc get Goal
//Route  Get/api/goals
//Access Private

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("Please enter all the fields");
  }

  //check if the user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("User already exists");
  }

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:generateToken(user._id)
    });
  } else {
    res.status(400)
    throw new Error("No valid Data");
  }
});

//@desc Authenticate a user
//Route  post/api/login
//Access Private

const loginUser = expressAsyncHandler(async (req, res) => {

  const {email, password } = req.body
  const user = await User.findOne({email})
  if(user && (await bcrypt.compare(password, user.password))){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:generateToken(user._id)
    });
  } else {
    res.status(400)
    throw new Error("Enter valid Credentials");
  }
});

//@desc get User
//Route  Get/api/users/me
//Access Private

const getMe = expressAsyncHandler(async (req, res) => {
 const {_id, name, email } = await User.findById(req.user.id)
 res.status(200).json({
   id:_id,
   name,
   email
 })
});


//Generate Token
const generateToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET, {
    expiresIn:"30d"
  } )
}

module.exports = {
  loginUser,
  getMe,
  registerUser,
};
