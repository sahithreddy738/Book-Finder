import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex max-w-full max-h-screen flex-col'>
        <Header />
         <Outlet/>
    </div>
  )
}

export default Home;