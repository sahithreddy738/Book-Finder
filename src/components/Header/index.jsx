import React, { useState } from "react";
import BOOK_BACKGROUND from "../../assets/image-2.jpg";
import { HEADER_HEADING, PLACEHOLDER_TEXT } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeBooks } from "../../utils/slices/bookSlice";


const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const buttonHandler=() =>{
     navigate("/books/"+searchInput)
     setSearchInput("");
     dispatch(removeBooks());
  }
  return (
    <div className="w-full relative h-[80vh] ">
      <img
        src={BOOK_BACKGROUND}
        alt="book-image"
        className="w-full h-full "
      ></img>
      <div className="absolute  top-4 left-5 md:left-10 z-10" onClick={()=>navigate("/")}>
        <h1 className="font-poppins font-bold text-red-500 text-lg md:text-3xl hover:cursor-pointer">
          Book Finder
        </h1>
      </div>
      <div className="absolute inset-0  flex text-center flex-col gap-6 md:gap-12 justify-center items-center bg-black bg-opacity-30">
        <h1 className="text-2xl md:text-6xl font-poppins text-white animate-slide-in-left">{HEADER_HEADING}</h1>
        <div className="flex">
          <input
            className="px-3 py-2 md:px-5 md:py-3 rounded-l-full border-none text-base md:text-lg font-poppins"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={PLACEHOLDER_TEXT}
          ></input>
          <button className="px-3 py-2 md:px-5 md:py-3 rounded-r-full bg-gray-300 font-poppins text-base md:text-lg "  onClick={buttonHandler}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
