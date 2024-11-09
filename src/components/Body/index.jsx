import React from 'react'
import { HOME_ABOUT } from '../../utils/constants'
import BOOK_IMAGE  from "../../assets/image-1.jpg";
import BOOK_IMAGE_2  from "../../assets/image-4.jpg";

const Body = () => {
  return (
    <div className='w-full h-full mt-20 '>
        <div className='w-[70%] mx-auto flex flex-col gap-8 mb-20 bg-gray-300 rounded-lg px-6 py-4'>
             <div className='flex flex-row'>
             <img className='w-[30%] md:w-[25%] mx-auto rounded-md animate-slide-in-left' src={BOOK_IMAGE} alt="Home-book-image"></img>
             <img className='w-[30%] md:w-[25%] mx-auto rounded-md animate-slide-in-right' src={BOOK_IMAGE_2} alt="Home-book-image"></img>

             </div>
             <p className='font-poppins text-xl md:text-3xl '>{HOME_ABOUT}</p>
        </div>
    </div>
  )
}

export default Body