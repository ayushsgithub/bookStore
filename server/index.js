import express from "express";
import "dotenv/config"
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const PORT = process.env.PORT;
const mongoDBURL=process.env.MONGO_URL

const app = express();

app.use(express.json());

app.use("/books", booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

