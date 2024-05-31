import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dcourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/book/getAll'
      );
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBookDetails = async (bookId) => {
    try {
      const response = await axios.get(
        `https://parents-follow-u.onrender.com/followup/book/get/${bookId}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      setSelectedBook(response.data);
      setTitle(response.data.bookName);
      setDescription(response.data.description);
      setInstructor(response.data.writerName);
      // No category field to set since it's removed
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const bookData = {
      bookName: title,
      description: description,
      writerName: instructor,
      // No category field to include since it's removed
    };

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/book/add',
        bookData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      fetchBooks();
      toast.success('Adding book was successfully.');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add book.');
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(
        `https://parents-follow-u.onrender.com/followup/book/delete/${bookId}`
      );
      fetchBooks();
      toast.success('Book deleted successfully!');
    } catch (error) {
      console.error(
        'Error deleting book:',
        error.response ? error.response.data : error.message
      );
      toast.error('Failed to delete book.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200">
        Books
      </h2>
      <form onSubmit={handleAddBook} className="flex flex-col space-y-4">
        <input
          type="text"
          name="bookName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Name"
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border p-2 rounded w-full"
        ></textarea>
        <input
          type="text"
          name="writerName"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="Writer Name"
          required
          className="border p-2 rounded w-full"
        />
        <Button
          type="submit"
          color="teal"
          ripple={true}
          className="rounded"
          fullWidth={true}
        >
          Add Book
        </Button>
      </form>
      <ToastContainer />
      <ul className="mt-4 space-y-2">
        {books.map((book) => (
          <li
            key={book._id}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex space-x-2">
              <Button
                color="yellow"
                ripple={true}
                className="rounded"
                onClick={() => fetchBookDetails(book._id)}
              >
                View/Edit
              </Button>
              <Button
                color="red"
                ripple={true}
                className="rounded"
                onClick={() => deleteBook(book._id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dcourse;
