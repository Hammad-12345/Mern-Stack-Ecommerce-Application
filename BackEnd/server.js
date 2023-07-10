import express from "express";
import dotenv from "dotenv";
import connectiondb from "./confiq/db.js";
import morgan from "morgan";
const app = express();

dotenv.config();
connectiondb();
app.use(morgan('dev')) 
app.use(express.json())
app.listen(process.env.Port || 8080, () => {
  console.log(`Mern Ecommerce Server is running on ${process.env.Port} form`);
});
