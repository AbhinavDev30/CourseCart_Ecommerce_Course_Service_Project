//Still in progress
import User from "../model/userSchema.js";
import bcrypt from "bcrypt";

//User Register Logic
export const register = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password, phone } = req.body;
    if (!username || !email || !password || !phone) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    if (!username || !email || !password || !phone) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exist",
      });
    }
    //Agar user already exists nahi karta tho ham password ko bycrypt kar denge.

    //create user
    const userCreated = await User.create({
      username: username,
      email: email,
      password: password,
      phone: phone,
    });
    res.status(200).json({
      message: "user created successfully",
      userData: userCreated,
      token: await userCreated.genrateToken(),
      userid: userCreated._id.toString(),
    });
  } catch (error) {
    // console.log(error);
    // return res.status(500).json({
    //   message: "Server error",
    // });

    next(error);
  }
};

//User Login Logic

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({
        message: "Invalid Credential",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid Credential",
      });
    }
    if (isPasswordValid) {
      const token = await userExist.genrateToken();
      res.status(200).json({
        message: "Login Successfull",
        token: token,
        userId: userExist._id.toString(),
        userData: userExist,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

//Contact user get info

// export const user = async (req, res) => {
//   try {
//     const userData = req.user;
//     res.status(200).json({ userData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// };
