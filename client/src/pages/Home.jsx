import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookTable from "../components/homeComponent/BookTable";
import BookCard from "../components/homeComponent/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <nav className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 rounded-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center p-2">
            <img
              className="inline-block h-8 mr-2 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SteveLambert-Library-Book-Cart.svg/511px-SteveLambert-Library-Book-Cart.svg.png"
              alt="logo"
            />
            <a href="/" className="text-3xl font-bold text-white font-alegreya">
              Ayush's Library
            </a>
          </div>

          <ul className="hidden md:flex space-x-6 px-6">
            <li>
              <button
                className={`${
                  showType === "table"
                    ? "text-white bg-sky-600"
                    : "text-indigo-300 hover:text-white hover:bg-sky-600 transition duration-300"
                } px-4 py-2 rounded-lg`}
                onClick={() => setShowType("table")}
              >
                Table
              </button>
            </li>
            <li>
              <button
                className={`${
                  showType === "card"
                    ? "text-white bg-sky-600"
                    : "text-indigo-300 hover:text-white hover:bg-sky-600 transition duration-300"
                } px-4 py-2 rounded-lg`}
                onClick={() => setShowType("card")}
              >
                Card
              </button>
            </li>
          </ul>

          <div className="md:hidden flex items-center">
            <div className="relative group">
              <button
                className="text-indigo-300 hover:text-white px-3 py-2 focus:outline-none"
                onClick={() =>
                  setShowType(showType === "table" ? "card" : "table")
                }
              >
                {showType === "table" ? "CARD" : "TABLE"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
