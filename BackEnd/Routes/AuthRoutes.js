import express from "express";
import {
  RegistrationController,
  LoginController,
  testcontroller,
} from "../Controller/AuthController.js";
import { protectroutes, isAdmin } from "../middlewares/AuthMiddleWare.js";
const router = express.Router();

// Routing

// Registration Route
router.post("/Registration", RegistrationController);
// Login Route
router.post("/Login", LoginController);

router.get("/test", protectroutes, isAdmin, testcontroller);

export default router;
