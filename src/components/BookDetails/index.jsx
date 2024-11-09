import React, { useEffect } from "react";
import DetailsCard from "../DetailsCard";
import ARROW_ICON from "../../assets/arrow.png";
import { useNavigate, useParams } from "react-router-dom";
import { BOOK_INFO_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addBookInformation } from "../../utils/slices/bookInfoSlice";
import RelatedImages from "../RelatedImages";
import { toast } from "react-toastify";


const BookDetails = () => {
  const navigate=useNavigate();
  const {bookId}=useParams();
  const dispatch=useDispatch();
  const fetchBookInfo=async()=> {
    try{
       const res=await fetch(BOOK_INFO_URL+bookId+".json");
       const data=await res.json();
       const  {description,subject_places,subject_people,covers}=data;
       dispatch(addBookInformation({
        description,subject_places,subject_people,covers
       }))
    }catch(error) {
       toast.error(error.response.data.message);
    }
  }
  useEffect(()=>{
    fetchBookInfo()
  },[bookId]);
  return  (
     <div className="w-full h-full mt-5 flex flex-col justify-start gap-4">
          <img src={ARROW_ICON} alt="arrow_icon" className="w-6 h-6 ml-4 cursor-pointer" onClick={()=>navigate(-1)}></img>
         <DetailsCard />
         <RelatedImages />
     </div>
  )
};

export default BookDetails;
