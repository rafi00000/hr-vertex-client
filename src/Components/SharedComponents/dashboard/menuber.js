'use client'
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
const Menuber = () => {
    const [show, setshow] = useState(false)
    return (
        <div className={`pl-5 bg-black md:min-h-screen bg-opacity-10 py-3 shadow-2xl relative ${show ? 'h-auto' : 'h-[65px]'} overflow-hidden`}>
            <div className="flex justify-start items-center  gap-4 border-b border-black pb-3">
                <Image className="w-10 h-10 object-cover rounded-full" src='https://i.ibb.co/LCR744p/5a369a5c44a772f87513d85c32110215.jpg' height={500} width={500} alt="img" />
                <span className="flex flex-col justify-start items-start gap-0">
                    <p className="text-lg font-bold">user name</p>
                    <a className="-mt-1 text-xs" href="mailto:useremail">useremail</a>
                </span>
            </div>
            <TiThMenuOutline onClick={() => setshow(!show)} className="absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold" />
            <ul className="pt-3 uppercase font-semibold flex flex-col gap-2 ">
                <li className="flex justify-start items-center gap-2">
                    <CgProfile className="text-xl" />
                    <Link href={`#`}>
                        profile
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <MdHolidayVillage className="text-xl" />
                    <Link href={`#`}>
                        holiday
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <FaUsers className="text-xl" />
                    <Link href={`/users`}>
                        users
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <ImProfile className="text-xl" />
                    <Link href={`#`}>
                        employees
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-2">
                    <RiUserSearchFill className="text-xl" />
                    <Link href={`reqruitment`}>
                        recruitment
                    </Link>
                </li>
            </ul>
            <div className="flex justify-start items-center  gap-4 border-t border-black pt-3 mt-6">
            <li className="flex justify-start items-center gap-2">
                    <IoIosHome className="text-xl" />
                    <Link href={`/`}>
                        home
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Menuber
