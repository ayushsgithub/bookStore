import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
// import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";

const app = express();

// Middleware for parsing request body
// app.use(express.json());

// // Middleware for handling CORS POLICY
// // Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());
// // Option 2: Allow Custom Origins
// // app.use(
// //   cors({
// //     origin: 'http://localhost:3000',
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type'],
// //   })
// // );

// app.get("/", (request, response) => {
//     console.log(request);
//     return response.status(234).send("Welcome To MERN Stack Tutorial");
// });

// app.use("/books", booksRoute);


app.post("/books", async (req, res) => {
    try {
        if (
            !req.body.title || !req.body.author || !req.body.publishYear
        ) {
            res.status(400).send({ message: "Send all the required fields: title, author, publishYear" })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook)
        res.status(201).send(book)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
        
    }
})

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

