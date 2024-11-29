const User = require("../models/userModel"); // Import the User model

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password, // Plain text password; will be hashed by the pre('save') middleware
      role, // Optional: Default to 'user' if not provided
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = signup;
