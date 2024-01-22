'use client'
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdHolidayVillage } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
const Menuber = () => {
    const [show,setshow]=useState(false)
    return (
        <div className={`pl-5 bg-teal-400 md:min-h-screen bg-opacity-55 py-3 shadow-2xl relative ${show?'h-auto':'h-[65px]'} overflow-hidden`}>
            <div className="flex justify-start items-center  gap-4 border-b border-black pb-3">
                <Image className="w-10 h-10 object-cover rounded-full" src='https://i.ibb.co/LCR744p/5a369a5c44a772f87513d85c32110215.jpg' height={500} width={500} alt="img" />
                <span className="flex flex-col justify-start items-start gap-0">
                    <p className="text-lg font-bold">user name</p>
                    <a className="-mt-1 text-xs" href="mailto:useremail">useremail</a>
                </span>
            </div>
            <TiThMenuOutline onClick={()=>setshow(!show)} className="absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold" />
            <ul className="pt-3 uppercase font-semibold">
                <li className="flex justify-start items-center gap-2">
                    <FaUserAlt className="text-xl" />
                    <Link href={`#`}>
                        employees
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <MdHolidayVillage className="text-xl" />
                    <Link href={`#`}>
                        holiday
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <FaUserAlt className="text-xl" />
                    <Link href={`#`}>
                        employees
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <MdHolidayVillage className="text-xl" />
                    <Link href={`#`}>
                        holiday
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <FaUserAlt className="text-xl" />
                    <Link href={`#`}>
                        employees
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <MdHolidayVillage className="text-xl" />
                    <Link href={`#`}>
                        holiday
                    </Link>
                </li>
            
            </ul>
        </div>
    )
}

export default Menuber
