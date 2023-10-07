import express from "express";
import "dotenv/config"
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const PORT = process.env.PORT;
const mongoDBURL=process.env.MONGO_URL

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRoute);

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

