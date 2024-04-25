import User from "../model/userSchema";
export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Please provide a valid token",
    });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVarified = Jwt.varify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVarified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized.Invalid token" });
  }
};
