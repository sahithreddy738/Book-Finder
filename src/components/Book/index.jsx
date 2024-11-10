import React, { useState } from "react";
import { COVERS_ID_URL } from "../../utils/constants";
import COVER_NOT_AVAILABLE from "../../assets/cover_not_available.jpg";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addBookInformation,
  removeBookInformation,
} from "../../utils/slices/bookInfoSlice";

const Book = ({ bookDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (Object.keys(bookDetails).length === 0) return <Spinner />;
  const {
    author_name,
    cover_i,
    title,
    first_publish_year,
    key,
    number_of_pages_median,
    publisher,
    ratings_average,
    author_key,
    subject,
  } = bookDetails;
  const bookHandler = () => {
    navigate("/works/" + key.substring(7));
    dispatch(removeBookInformation());
    dispatch(
      addBookInformation({
        author_name,
        cover_i,
        title,
        first_publish_year,
        key,
        number_of_pages_median,
        publisher,
        ratings_average,
        author_key,
        subject,
  })
    );
  };
  return (
    <div
      className="w-[40%] h-[20%] md:w-[20%] md:h-[10%] flex flex-col gap-2 overflow-scroll scrollbar hover:bg-gray-300 p-4 rounded-lg hover:cursor-pointer"
      onClick={bookHandler}
      data-testid="book-item"
    >
      <div className="w-full h-[90%]">
        <img
          src={cover_i ? COVERS_ID_URL + cover_i + "-L.jpg" : COVER_NOT_AVAILABLE}
          alt="cover-image"
          className={`w-full h-full object-cover rounded-md`}
        />
      </div>
      <h1 className="font-poppins text-xl font-semibold">{title}</h1>
      <h2 className="font-poppins text-lg">{author_name && author_name[0]}</h2>
      <span className="font-poppins text-base ">{first_publish_year}</span>
    </div>
  );
};

export default Book;
