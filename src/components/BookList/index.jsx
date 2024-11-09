import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SEARCH_BOOKS_URL } from "../../utils/constants";
import { addBooks } from "../../utils/slices/bookSlice";
import Book from "../Book";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

const BookList = () => {
  const { title } = useParams();
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const fetchBooks = async () => {
    try {
      const res = await fetch(SEARCH_BOOKS_URL + title);
      const data = await res.json();
      dispatch(addBooks(data.docs));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [title]);

  return books.length === 0 ? (
    <Spinner />
  ) : (
    <div className="w-full h-full mt-5 flex  flex-wrap justify-center gap-4">
      {books.map((book) => (
        <Book key={book.key} bookDetails={book} />
      ))}
    </div>
  );
};

export default BookList;
