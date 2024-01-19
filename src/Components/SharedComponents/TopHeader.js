import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const TopHeader = () => {
    return (
        <div className='sm:flex justify-between items-center text-teal-500  container mx-auto gap-2 '>
            <div className='md:flex justify-start items-center gap-2 '>
                <a className='flex justify-start items-center gap-1 py-2 pl-2' href='mailto:shaharulsiyam0273@gmail.com'><HiOutlineMailOpen /> shaharulsiyam0273@gmail.com</a>
                <span className='flex justify-start items-center gap-1  py-2 pl-2'><MdOutlineLocationOn />  12 Tottina, NY, USA</span>
            </div>
            <span className='flex justify-start items-center gap-2 p-2 flex-wrap'>
                <a href='#'>
                    <FaFacebookF className='text-2xl p-1 text-teal-300 bg-gray-600 cursor-pointer hover:scale-110 transition-all active:scale-95 rounded-full' />
                </a>
               <a href='#'>
               <FiInstagram className='text-2xl p-1 text-teal-300 bg-gray-600 cursor-pointer hover:scale-110 transition-all active:scale-95 rounded-full' />
               </a>
               <a href='#'>
               <FaLinkedinIn className='text-2xl p-1 text-teal-300 bg-gray-600 cursor-pointer hover:scale-110 transition-all active:scale-95 rounded-full' />
               </a>
               <a href='#'>
               <FaTwitter className='text-2xl p-1 text-teal-300 bg-gray-600 cursor-pointer hover:scale-110 transition-all active:scale-95 rounded-full' />
               </a>
              
            </span>
        </div>
    )
}

export default TopHeader