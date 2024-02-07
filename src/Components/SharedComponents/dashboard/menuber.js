'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { RiUserSearchFill } from 'react-icons/ri';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { IoIosHome } from 'react-icons/io';
import { coreContext } from '@/provider/AuthContext';
import { RiFileCopy2Fill } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { GrFormSubtract } from "react-icons/gr";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
const Menuber = () => {
  const pathname = usePathname()
  const { user } = useContext(coreContext);
  const [show, setshow] = useState(false);
  const [isAdmin, setIsAdmin] = useState({});
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpen1, setIsOpen1] = useState(false);
  console.log(user)
  useEffect(() => {
    fetch(`https://hr-vertex-server.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data);
      })
  }, [user?.email])

  return (
    <div
      className={`pl-5 bg-emerald-200 md:min-h-screen p-3 shadow-2xl relative ${show ? 'h-auto' : 'h-[65px]'} overflow-hidden`}
    >
      <div className='flex justify-start items-center  gap-4 border-b border-black pb-3'>
        {
          user?.photoURL && <Image
            className='w-10 h-10 object-cover rounded-full'
            src={user?.photoURL}
            height={500}
            width={500}
            alt='profile image'
          />
        }

        <span className='flex flex-col justify-start items-start gap-0'>
          <p className='text-lg font-bold'>{user?.displayName}</p>
          <a className='-mt-1 text-xs' href='mailto:useremail'>
            {user?.email}
          </a>

        </span>
      </div>
      <TiThMenuOutline
        onClick={() => setshow(!show)}
        className='absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold'
      />
      <ul className='pt-3 uppercase font-semibold flex flex-col gap-2 '>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <CgProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard`}>
            Profile
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <ImProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/employees`}>
            Employees
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <ImProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/attendance`}>
            Attendance
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <RiUserSearchFill className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/recruitment`}>
            Recruitment
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <RiFileCopy2Fill className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/applications`}>
            Applications
          </Link>
        </li>

        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <FaPeopleGroup className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/allClients`}>
            All Clients
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <FaProjectDiagram className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/projects`}>
            projects
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <AiOutlineTeam className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/teams`}>
            teams
          </Link>
        </li>

        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">

          <MdOutlinePeopleAlt size={25} className="text-xl" />
          <p onClick={() => setIsOpen1((pre) => !pre)} className="p-3 pl-3 w-full" >
            employees
          </p>
          {
            !IsOpen1 ? <span><FaPlus size={11} className="text-xl" /></span> : <span><GrFormSubtract size={20} className="text-xl" /></span>
          }
        </li>

        {
          IsOpen1 &&
          <ul>
            <Link href={`/dashboard/allEmployee`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  ALL Employees
                </p>
              </li>
            </Link>
            <Link href={`/dashboard/addEmployee`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  Add Employees
                </p>
              </li>
            </Link>
          </ul>
        }


      </ul>
      <div className='flex justify-start items-center  gap-4 border-t border-black pt-3 mt-6'>
        <li className='flex justify-start items-center w-full gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <IoIosHome className='text-xl' />
          <Link className='p-3 w-full' href={`/`}>
            home
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Menuber;