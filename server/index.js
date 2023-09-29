import express from "express";
import "dotenv/config"
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
// import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";

const PORT = process.env.PORT;
const mongoDBURL=process.env.MONGO_URL

const app = express();

app.use(express.json());

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

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).json({
            count: books.length,
            data: books,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

app.get('/books/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const book = await Book.findById(id);
  
      return res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  app.put('/books/:id', async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

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

