"use client";
import Image from "next/image";
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
  const { user } = useContext(coreContext);
  const [show, setshow] = useState(false);
  return (
    <div
      className={`pl-5 bg-emerald-200 md:min-h-screen p-3 shadow-2xl relative ${
        show ? "h-auto" : "h-[65px]"
      } overflow-hidden`}
    >
      <div className="flex justify-start items-center  gap-4 border-b border-black pb-3">
        <Image
          className="w-10 h-10 object-cover rounded-full"
          src={user?.photoURL}
          height={500}
          width={500}
          alt="img"
        />
        <span className="flex flex-col justify-start items-start gap-0">
          <p className="text-lg font-bold">{user?.displayName}</p>
          <a className="-mt-1 text-xs" href="mailto:useremail">
            {user?.email}
          </a>
        </span>
      </div>
      <TiThMenuOutline
        onClick={() => setshow(!show)}
        className="absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold"
      />
      <ul className="pt-3 uppercase font-semibold flex flex-col gap-2 ">
        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <CgProfile className="text-xl" />
          <Link className="p-3 w-full" href={`/dashboard`}>
            profile
          </Link>
        </li>
        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <MdHolidayVillage className="text-xl" />
          <Link className="p-3 w-full" href={`/dashboard/holiday`}>
            holiday
          </Link>
        </li>
        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <ImProfile className="text-xl" />
          <Link className="p-3 w-full" href={`/dashboard/employee`}>
            employees
          </Link>
        </li>
        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <RiUserSearchFill className="text-xl" />
          <Link className="p-3 w-full" href={`/dashboard/recruitment`}>
            recruitment
          </Link>
        </li>
        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <RiFileCopy2Fill className="text-xl" />
          <Link className="p-3 w-full" href={`/dashboard/applications`}>
            applications
          </Link>
        </li>
      </ul>
      <div className="flex justify-start items-center  gap-4 border-t border-black pt-3 mt-6">
        <li className="flex justify-start items-center w-full gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
          <IoIosHome className="text-xl" />
          <Link className="p-3 w-full" href={`/`}>
            home
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Menuber;
