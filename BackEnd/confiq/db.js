import mongoose from "mongoose";
import colors from "colors";

const connectiondb = async () => {
  try {
    await mongoose.connect(process.env.Mongodb);
    console.log("Connected With MongoDb".bgMagenta.black);
  } catch (error) {
    console.log(error);
  }
};
export default connectiondb;
