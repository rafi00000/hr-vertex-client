import Link from 'next/link';
import React from 'react';
import { TiPlus } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { BiListPlus } from "react-icons/bi";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaBan } from "react-icons/fa6";
const page = () => {
    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold'>All Leave Request</p>
                    <h1 className='text-sm pt-1'>dashboard / All Request</h1>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='flex gap-2'>
                        <div className='border bg-white p-1 rounded-sm'>
                            <BiListPlus size={22}></BiListPlus>
                        </div>
                        <div className='border bg-white p-1 rounded-sm'>
                            <BiListPlus size={22}></BiListPlus>
                        </div>
                    </div>
                    <button className="btn btn-sm bg-red-700 text-white" >
                        <span><TiPlus></TiPlus></span>  Add Request
                    </button>
                </div>
            </div>



            <div className='mt-2 flex justify-end'>
                <form>
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="search" className="block w-full p-2 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />

                    </div>
                </form>
            </div>

            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead className='bg-zinc-300 '>
                        <tr className='font-bold text-black'>
                            <th></th>
                            <th>Name</th>
                            <th>Leave Type</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Action</th>
                         
                        </tr>

                    </thead>
                    <tbody >

                        <tr className=''>
                            <th>
                                <div className="avatar border rounded-full p-1 bg-white">
                                    <div className="w-9  rounded-full">
                                        <img src="https://i.ibb.co/7t2zYJY/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg" />
                                    </div>
                                </div>
                            </th>
                            <td>Riad Jowarde </td>

                            <td> Casual Leave</td>
                            <td> 12-02-2024 <span className='text-base'> To </span> 12-02-2024 </td>
                            <td>Family Problem</td>
                            <td className='flex'>

                                <button className=" btn-xs">
                                    <BsCheckSquareFill size={30} color='green'></BsCheckSquareFill>
                                </button>
                                <div style={{ border: "2px solid red" }} className=' rounded-lg '>
                                    <button className=" btn-xs pl-2 py-[7px]">
                                        <FaBan size={15} color='red'></FaBan>
                                    </button>

                                </div>
                            </td>
                        </tr>


                        <tr className=''>
                            <th>
                                <div className="avatar border rounded-full p-1 bg-white">
                                    <div className="w-9  rounded-full">
                                        <img src="https://i.ibb.co/7t2zYJY/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg" />
                                    </div>
                                </div>
                            </th>
                            <td>Riad Jowarde </td>

                            <td> Casual Leave</td>
                            <td> 12-02-2024 <span className='text-base'> To </span> 12-02-2024 </td>
                            <td>Family Problem</td>
                            <td className='flex'>

                                <button className=" btn-xs">
                                    <BsCheckSquareFill size={30} color='green'></BsCheckSquareFill>
                                </button>
                                <div style={{ border: "2px solid red" }} className=' rounded-lg '>
                                    <button className=" btn-xs pl-2 py-[7px]">
                                        <FaBan size={15} color='red'></FaBan>
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <tr className=''>
                            <th>
                                <div className="avatar border rounded-full p-1 bg-white">
                                    <div className="w-9  rounded-full">
                                        <img src="https://i.ibb.co/7t2zYJY/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg" />
                                    </div>
                                </div>
                            </th>
                            <td>Riad Jowarde </td>

                            <td> Casual Leave</td>
                            <td> 12-02-2024 <span className='text-base'> To </span> 12-02-2024 </td>
                            <td>Family Problem</td>
                            <td className='flex'>

                                <button className=" btn-xs">
                                    <BsCheckSquareFill size={30} color='green'></BsCheckSquareFill>
                                </button>
                                <div style={{ border: "2px solid red" }} className=' rounded-lg '>
                                    <button className=" btn-xs pl-2 py-[7px]">
                                        <FaBan size={15} color='red'></FaBan>
                                    </button>

                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default page;