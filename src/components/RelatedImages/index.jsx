import React from "react";
import { useSelector } from "react-redux";
import { COVERS_ID_URL } from "../../utils/constants";
import COVER_NOT_AVAILABLE from "../../assets/cover_not_available.jpg";
import Spinner from "../Spinner";

const RelatedImages = () => {
  const { bookInformation } = useSelector((store) => store.bookInfo);
  if (Object.keys(bookInformation).length === 0) return <Spinner />;
  const { covers } = bookInformation;
  return (
    <div className="w-[100%] flex flex-col gap-4">
      <p className="w-[90%] font-poppins mt-5 mb-5 text-2xl md:text-3xl mx-auto font-semibold">Related Images</p>
      {console.log(covers)}
      <div className="w-[90%] justify-center mx-auto flex  flex-wrap gap-6">
        {covers  &&
          covers.length>0? covers.map((id) => (
            <div className="w-[30%]" key={id}>
              <img
                src={
                  id > 0 ? COVERS_ID_URL + id + "-L.jpg" : COVER_NOT_AVAILABLE
                }
                alt="cover-image"
                className="w-full h-full object-cover rounded-md"
              ></img>
            </div>
          )):<p>No related Images Available</p>}
      </div>
    </div>
  );
};

export default RelatedImages;
