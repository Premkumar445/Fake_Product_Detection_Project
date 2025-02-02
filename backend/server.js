const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
//   {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// }
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging line

    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save new user
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
