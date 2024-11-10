import React, { useState } from "react";
import { COVERS_ID_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import COVER_NOT_AVAILABLE from "../../assets/cover_not_available.jpg";
import Spinner from "../Spinner";

const DetailsCard = () => {
  const [flag, setFlag] = useState(false);
  const [subjectFlag, setSubjectFlag] = useState(false);
  const { bookInformation } = useSelector((store) => store.bookInfo);
  if (bookInformation && Object.keys(bookInformation).length === 0) return <Spinner />;
  const {
    author_name,
    cover_i,
    title,
    first_publish_year,
    number_of_pages_median,
    publisher,
    ratings_average,
    subject,
    description,
  } = bookInformation;
  return (
    <div className="w-[90%]  mx-auto flex gap-6" data-testid="details-card">
      
        <img
         src={cover_i ? COVERS_ID_URL + cover_i + "-L.jpg" : COVER_NOT_AVAILABLE}
         alt="cover-image"
         className="w-[30%] h-full object-cover rounded-md"
       ></img>
      
      <div className="w-[70%] flex flex-col gap-2">
         {title &&   <p className="font-poppins text-lg font-semibold">{title}</p>}
         {
          author_name &&  <p className="font-poppins font-semibold">
          {"Author: " + author_name[0]}
        </p>
         }
        {ratings_average && number_of_pages_median && (
          <div className="flex flex-row gap-4">
            <p className="font-poppins bg-gray-300 rounded-lg md:rounded-xl px-3 text-sm md:text-base py-1 md:px-4 md:py-2">
              {ratings_average.toFixed(2) + " rating"}
            </p>
            <p className="font-poppins bg-gray-300 rounded-lg md:rounded-xl text-sm md:text-base  px-3 py-1 md:px-4 md:py-2">
              {number_of_pages_median + " pages"}
            </p>
          </div>
        )}
        {description && description?.value && (
          <div className="flex flex-col gap-1 overflow-scroll scrollbar">
            <p className="font-poppins font-semibold underline">
              Description :
            </p>
            <p className="font-poppins">
              {description.value ? description.value : description}
            </p>
          </div>
        )}
        {
          first_publish_year &&  <p className="font-poppins font-semibold">
          {"First Published In: " + first_publish_year}
        </p>
        }
        <div className="flex flex-col gap-1 cursor-pointer">
          <p className="font-poppins font-semibold underline">Published By:</p>
          <div className="flex font-poppins flex-wrap gap-2 text-blue-600">
            {publisher && publisher.length < 5 ? (
              publisher.map((publisher) => (
                <span key={publisher}>{publisher + ","}</span>
              ))
            ) : (
              <div className="flex flex-wrap gap-2">
                {publisher.slice(0, 5).map((publisher) => (
                  <span key={publisher}>{publisher + ","}</span>
                ))}
                {!flag && (
                  <button
                    className="cursor-pointer text-black font-poppins"
                    onClick={() => setFlag(true)}
                  >
                    ...Read More
                  </button>
                )}
              </div>
            )}
            {flag && (
              <div className="flex flex-wrap gap-2">
                {publisher.slice(6).map((publisher) => (
                  <span key={publisher}>{publisher + ","}</span>
                ))}
                <button
                  className="cursor-pointer text-black font-poppins"
                  onClick={() => setFlag(false)}
                >
                  ...Read Less
                </button>
              </div>
            )}
          </div>
        </div>

        {subject && subject.length > 0 && (
          <div className="flex flex-col gap-1 cursor-pointer">
            <p className="font-poppins font-semibold underline">Subjects:</p>
            <div className="flex font-poppins flex-wrap gap-2 text-blue-600">
              {subject && subject.length < 5 ? (
                subject.map((subject) => (
                  <span key={subject}>{subject + ","}</span>
                ))
              ) : (
                <div className="flex flex-wrap gap-2">
                  {subject.slice(0, 5).map((subject) => (
                    <span key={subject}>{subject + ","}</span>
                  ))}
                  {!subjectFlag && (
                    <button
                      className="cursor-pointer text-black font-poppins"
                      onClick={() => setSubjectFlag(true)}
                    >
                      ...Read More
                    </button>
                  )}
                </div>
              )}
              {subjectFlag && (
                <div className="flex flex-wrap gap-2">
                  {subject.slice(6).map((subject) => (
                    <span key={subject}>{subject + ","}</span>
                  ))}
                  <button
                    className="cursor-pointer text-black font-poppins"
                    onClick={() => setSubjectFlag(false)}
                  >
                    ...Read Less
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
