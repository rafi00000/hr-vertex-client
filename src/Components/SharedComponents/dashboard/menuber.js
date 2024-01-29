'use client'
import Image from "next/image"
import Link from "next/link";
import { useContext, useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { IoIosHome } from "react-icons/io";
import { coreContext } from "@/provider/AuthContext";
import { RiFileCopy2Fill } from "react-icons/ri";
const Menuber = () => {
    const {user}=useContext(coreContext)
    const [show, setshow] = useState(false)
    return (
        <div className={`pl-5 bg-black md:min-h-screen bg-opacity-10 p-3 shadow-2xl relative ${show ? 'h-auto' : 'h-[65px]'} overflow-hidden`}>
            <div className="flex justify-start items-center  gap-4 border-b border-black pb-3">
                <Image className="w-10 h-10 object-cover rounded-full" src={user?.photoURL} height={500} width={500} alt="img" />
                <span className="flex flex-col justify-start items-start gap-0">
                    <p className="text-lg font-bold">{user?.displayName}</p>
                    <a className="-mt-1 text-xs" href="mailto:useremail">{user?.email}</a>
                </span>
            </div>
            <TiThMenuOutline onClick={() => setshow(!show)} className="absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold" />
            <ul className="pt-3 uppercase font-semibold flex flex-col gap-2">
                <li className="flex justify-start items-center gap-1 hover:bg-gray-400 px-3 rounded-md duration-500">
                    <CgProfile className="text-xl" />
                    <Link className="w-full p-2" href={`/dashboard`}>
                        profile
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-400 px-3 rounded-md duration-500">
                    <MdHolidayVillage className="text-xl" />
                    <Link className="w-full p-2" href={`#`}>
                        holiday
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-400 px-3 rounded-md duration-500">
                    <ImProfile className="text-xl" />
                    <Link className="w-full p-2" href={`/dashboard/users`}>
                        employees
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-400 px-3 rounded-md duration-500">
                    <RiUserSearchFill className="text-xl" />
                    <Link className="w-full p-2" href={`/dashboard/recruitment`}>
                        recruitment
                    </Link>
                </li>
                <li className="flex justify-start items-center gap-1 hover:bg-gray-400 px-3 rounded-md duration-500">
                    <RiFileCopy2Fill className="text-xl" />
                    <Link className="w-full p-2" href={`/dashboard/applications`}>
                    applications
                    </Link>
                </li>
            </ul>
            <div className="flex justify-start items-center  gap-4 border-t border-black pt-3 mt-6">
            <li className="flex justify-start items-center gap-2 ho1er:bg-gray-400 dur px-3 rounded-mdation-500">
                    <IoIosHome className="text-xl" />
                    <Link className="w-full p-2" href={`/`}>
                        Home
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Menuber
