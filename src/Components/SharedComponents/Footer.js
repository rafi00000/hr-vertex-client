import Link from 'next/link';
import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlinePhoneInTalk } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="p-6 text-teal-700 container mx-auto border">
            <div className="container sm:grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 items-start justify-center">

                <div className="flex flex-col my-2  ">
                    <h2 className="font-medium">menu</h2>
                    <div className="flex flex-wrap sm:flex-col gap-1 text-sm ">
                        <Link className='hover:scale-105 active:scale-95' href='/'>
                            home
                        </Link>
                        <Link className='hover:scale-105 active:scale-95' href='/about'>
                            about
                        </Link>
                        <Link className='hover:scale-105 active:scale-95' href='/contact'>
                            contact
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col my-2  ">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex sm:flex-col flex-wrap gap-1 text-sm ">
                        <a rel="noopener noreferrer" href="#">GitHub</a>
                        <a rel="noopener noreferrer" href="#">Discord</a>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                        <a rel="noopener noreferrer" href="#">YouTube</a>
                    </div>
                </div>
                <div className="flex flex-col my-2  ">
                    <h2 className="font-medium">About</h2>
                    <div className="flex  flex-col gap-1 text-sm ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                    </div>
                </div>
                <div className="flex flex-col my-2 ">
                    <h2 className="font-medium">address</h2>
                    <div className="flex sm:flex-col flex-wrap gap-1 text-sm dark:text-teal-400">
                        <span className='flex justify-start items-center gap-1  py-2 pl-2'><MdOutlineLocationOn />  12 Tottina, NY, USA</span>
                        <a className='flex justify-start items-center gap-1 py-2 pl-2' href='mailto:shaharulsiyam0273@gmail.com'><HiOutlineMailOpen /> shaharulsiyam0273@gmail.com</a>
                        <a className='flex justify-start items-center gap-1 py-2 pl-2' href='tel:+8801566026301'><MdOutlinePhoneInTalk /> shaharulsiyam0273@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="">© Copyright 2024. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
