const mongoose = require("mongoose");

// Define the User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    trim: true, // Removes extra spaces
    lowercase: true // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 2 // Ensures password is at least 6 characters long
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets the current date
  }
});

// Create the User model from the schema
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
