import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/collabTodo";

export const mainConnection = async () => {
  try {
    await mongoose.connect(url).then(() => {
      console.log("database is up and running");
    });
  } catch (error) {
    console.log(error);
  }
};
