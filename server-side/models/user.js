const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "user", "editor"], // Role-based access
      default: "user", // Default role is 'user'
    },
    resetPasswordToken: String, // Token for password reset
    resetPasswordExpires: Date, // Expiry time for the token
  },
  {
    versionKey: false, // Disable `__v` versioning field
    timestamps: true, // Automatically manage `createdAt` and `updatedAt`
  },
);

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if the password is new/modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error);
  }
});

// Compare given password with the hashed password in the database
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
