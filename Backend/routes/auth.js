const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Contractor = require("../models/contractor.model"); // Import your contractor model

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, mobile_no, email, aadhar_no, pan_no, password } = req.body;

  // Input validation
  if (!username || !mobile_no || !email || !aadhar_no || !pan_no || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the contractor already exists
    const existingContractor = await Contractor.findOne({ email });
    if (existingContractor) {
      return res.status(400).json({ message: "Contractor already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new contractor
    const newContractor = new Contractor({
      name: username,
      mobile_no,
      email,
      aadhar_no,
      pan_no,
      password: hashedPassword,
    });

    // Save the contractor to the database
    await newContractor.save();

    // Send success response
    res.status(201).json({ message: "Contractor registered successfully." });
  } catch (error) {
    console.error("Error registering contractor:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
  
    try {
      // Check if the contractor exists
      const contractor = await Contractor.findOne({ email });
      if (!contractor) {
        return res.status(400).json({ message: "Invalid credentials." });
      }
  
      // Compare the password
      const isMatch = await bcrypt.compare(password, contractor.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials." });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { id: contractor._id, email: contractor.email },
        "your_jwt_secret_key", // Replace with your JWT secret key
        { expiresIn: "1h" }
      );
  
      // Send success response with the token
      res.status(200).json({ token, message: "Login successful." });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  });


module.exports = router;
