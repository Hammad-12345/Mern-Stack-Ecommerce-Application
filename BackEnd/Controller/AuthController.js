import { hashpassword, comparepassword } from "../Helpers/authhelpers.js";
import UserRegistrationModel from "../Models/UserModel.js";
import Jwt from "jsonwebtoken";
export const RegistrationController = async (req, res) => {
  try {
    const { Name, Email, password, PhoneNumber, Address } = req.body;
    const EncrpytPassword = await hashpassword(password);
    const InsertDoc = new UserRegistrationModel({
      Name,
      Email,
      Password: EncrpytPassword,
      PhoneNumber,
      Address,
    });
    await InsertDoc.save();
    res.status(201).send({ message: "Succesfully Register" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      errordata: error,
    });
  }
};

export const LoginController = async (req, res) => {
  try {
    const { Email, password } = req.body;
    const User = await UserRegistrationModel.findOne({ Email });
    console.log(User);
    if (!User) {
      res.status(404).send({ message: "email is not register" });
    } else {
      const checkPassword = await comparepassword(password, User.Password);
      if (!checkPassword) {
        res.status(200).send({ message: "Password Does Not Match" });
      } else {
        // Token Create
        const token = await Jwt.sign({ id: User._id }, process.env.JWT_Secret, {
          expiresIn: "7d",
        });
        res.send({
          success: true,
          message: "Login Successfully",
          user: {
            name: User.Name,
            email: User.Email,
            PhoneNumber: User.PhoneNumber,
            Address: User.Address,
          },
          Token: token,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const testcontroller = async (req, res) => {
  res.send("protect routes");
};
