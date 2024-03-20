//Imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Blogs from "./models/blogSchema.mjs";
import blogsData from "./utilities/data.js";

//Configurations
dotenv.config(); //load env variables from .env file
const app = express(); //create an express server
const PORT = process.env.PORT || 3000; //define port

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw console.error("Error connecting to MongoDB:");
  }
})();

//Middleware
app.use(express.json()); //parse JSON
