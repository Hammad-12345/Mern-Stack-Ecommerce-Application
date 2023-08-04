import express from "express";
import dotenv from "dotenv";
import connectiondb from "./confiq/db.js";
// import router from "./Routes/AuthRoutes.js";
// import AuthRoutes from "./Routes/AuthRoutes.js";
import morgan from "morgan";
import router  from './Routes/AuthRoutes.js'

dotenv.config();
connectiondb();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use('/User',router)
app.listen(process.env.Port || 8080, () => {
  console.log(`Mern Ecommerce Server is running on ${process.env.Port} form`);
});
