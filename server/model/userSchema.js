// still in progress
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    //userSchema eska current context hai es liye this.password
    const hash_password = await bcrypt.hash(this.password, saltRound);
    this.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//JSON Web token
//Json Web Token (You always store json data in clint side either in localstorage or in cookies you never store token in database)

userSchema.methods.genrateToken = function () {
  try {
    //user keidentity jo aap share karna chahate ho.
    return Jwt.sign(
      {
        UserId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const User = new mongoose.model("User", userSchema);
export default User;
