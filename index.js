import express from "express";
import cors from"cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import FAQROUTER from "./routes/faqRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

app.use("/api/faqs", FAQROUTER);

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to database");
    } catch (error) {
        console.error("error connecting to database");
    }
};

connect();

app.listen(3000, ()=>{
    console.log("server is running on http://localhost:3000");
});