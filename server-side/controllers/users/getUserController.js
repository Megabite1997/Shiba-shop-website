const User = require("../../models/userModel");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      // Fetch a single user by ID
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } else {
      // Fetch all users
      const users = await User.find();
      res.status(200).json(users);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user(s)", error: error.message });
  }
};

module.exports = getUser;
