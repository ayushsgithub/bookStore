import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border border-gray-400">No</th>
          <th className="py-2 px-4 border border-gray-400">Title</th>
          <th className="py-2 px-4 border border-gray-400 md:table-cell">Author</th>
          <th className="py-2 px-4 border border-gray-400 md:table-cell">Publish Year</th>
          <th className="py-2 px-4 border border-gray-400">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="bg-white hover:bg-gray-100">
            <td className="py-2 px-4 border border-gray-400 text-center">{index + 1}</td>
            <td className="py-2 px-4 border border-gray-400">{book.title}</td>
            <td className="py-2 px-4 border border-gray-400 md:table-cell">{book.author}</td>
            <td className="py-2 px-4 border border-gray-400 md:table-cell">{book.publishYear}</td>
            <td className="py-2 px-4 border border-gray-400 text-center">
              <div className="flex justify-center space-x-2">
                <Link to={`/books/details/${book._id}`} className="text-green-800 hover:text-green-600">
                  <BsInfoCircle className="text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`} className="text-yellow-600 hover:text-yellow-400">
                  <AiOutlineEdit className="text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`} className="text-red-600 hover:text-red-400">
                  <MdOutlineDelete className="text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default BooksTable;