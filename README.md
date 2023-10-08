# BookStore - Online Book Store Project

Welcome to the BookStore project, a fully functional online book store built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project allows users to browse, add, edit, and delete book entries, providing an intuitive and efficient way to manage your book collection.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/booksTable.png?raw=true)


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

### Browse Books
- Users can easily browse through the list of books, either in table format or by specific card view, providing flexibility in how they view their collection.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/booksCard.png?raw=true)

### Add New Books
- Add new entries for books to keep your collection up to date. Fill in the details, such as title, author, genre, and more, to maintain an organized library.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/bookCreate.png?raw=true)

### Edit Book Details
- Users have the ability to edit the details of existing books, ensuring that the information in the collection is accurate and up-to-date.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/bookEdit.png?raw=true)

### Delete Books
- Remove books from the list when they are no longer in your collection or for any other reason, ensuring that your library stays well-maintained.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/bookDelete.png?raw=true)

### Show Single Book
- To see single book information.

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/bookShow.png?raw=true)

![booksTable](https://github.com/ayushsgithub/bookStore/blob/main/client/public/booksCardSingle.png?raw=true)

## Tech Stack

This project is built using the following technologies:

- **MongoDB**: A NoSQL database for storing book information.
- **Express.js**: A Node.js web application framework used for building the server-side API.
- **React.js**: A JavaScript library for building the user interface and frontend components.
- **Node.js**: A JavaScript runtime environment for running server-side code.
- **Tailwind CSS**: A utility-first CSS framework for styling the frontend.
- **Axios**: A promise-based HTTP client for making API requests.

## Folder Structure

The project has the following folder structure:

```
bookStore/
├── client/
├── server/
├── README.md
```

- `client/`: Contains all the frontend code.
  - `client/src/`: Includes all frontend components and page routes.
- `server/`: Houses all the database models and backend logic.
  - `server/routes/`: Contains all the route handlers.



## Getting Started

To run the BookStore project on your local machine, which consists of two main folders (client and server) with a MongoDB backend and an example `.env` file in the server folder, follow these steps:

### Prerequisites:

Before you begin, make sure you have the following installed on your machine:

1. Node.js and npm (Node Package Manager): You can download them from [nodejs.org](https://nodejs.org/).

2. MongoDB: Install and set up MongoDB on your local machine. You can download it from [mongodb.com](https://www.mongodb.com/try/download/community).

### Steps:

1. Clone the Repository:

   Open your terminal or command prompt and navigate to the directory where you want to clone the project. Then, run the following command:

   ```bash
   git clone https://github.com/ayushsgithub/bookStore.git
   ```

2. Install Dependencies:

   Navigate to the project folder and install dependencies for both the client and server:

   ```bash
   cd bookStore/client
   npm install
   ```

   ```bash
   cd ../server
   npm install
   ```

3. Set Up MongoDB:

   - Make sure MongoDB is running locally on your machine. You can start MongoDB by running `mongod` in your terminal.

4. Create a `.env` File:

   In the `server` directory, create a `.env` file by copying the `.env.example` file and updating it with your MongoDB connection URI and any other environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your MongoDB URI and any other necessary configurations.

5. Start the Server:

   In the `server` directory, start the Node.js server:

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:5000`.

6. Start the Client:

   In the `client` directory, start the React client:

   ```bash
   npm start
   ```

   This will start the React development server and open the application in your default web browser at `http://localhost:3000`.

7. Access the Application:

   You should now be able to access the BookStore application in your web browser at `http://localhost:3000`. You can interact with the online book store and test its features locally.

That's it! You've successfully set up and run the BookStore project on your local machine. You can now browse, add, edit, and delete books in your local BookStore.

1. Clone this repository to your local machine.
2. Install the required dependencies for both the client and server by navigating to the respective directories and running `npm install`.
3. Set up your MongoDB database and configure the connection in the server.
4. Start the server by running `npm start` in the server directory.
5. Start the client by running `npm start` in the client directory.
6. Access the BookStore project in your web browser at the specified URL.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow our [Contribution Guidelines](CONTRIBUTING.md).