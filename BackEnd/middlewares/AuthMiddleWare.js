import JWT from "jsonwebtoken";
import UserRegistration from "../Models/UserModel.js";
// protected routes

export const protectroutes = async (req, res, next) => {
  try {
    const verify = JWT.verify(
      req.headers.authorization,
      process.env.JWT_Secret
    );
    req.user = verify;
    next();
  } catch (error) {}
};

export const isAdmin = async (req, res, next) => {
  try {
    const userdata = await UserRegistration.findById(req.user.id);
    console.log(userdata);
    if (userdata.Role !== 1) {
      res.status(401).send({
        success: false,
        message: "unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.send({
      message: "error in admin middleware",
      error: error,
    });
  }
};
