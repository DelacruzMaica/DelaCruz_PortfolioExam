const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(console.error);


// Schema + Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  comments: String,
});


const User = mongoose.model("Contact", userSchema, "contact");


// Save contact
app.post("/contact", async (req, res) => {
  try {
    const newMessage = new User(req.body);


    await newMessage.save();


    res.json({
      success: true,
      message: "Saved successfully",
    });
  } catch (err) {
    console.log(err);


    res.status(500).json({
      success: false,
    });
  }
});


// Get all contacts
app.get("/contact", async (req, res) => {
  try {
    const users = await User.find();


    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});


// Delete contact
app.delete("/contact/:id", async (req, res) => {
  try {
    const id = req.params.id;


    await User.findByIdAndDelete(id);


    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
});


// Start server
app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
