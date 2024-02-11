"use client";

import React from 'react';
import { TiPlus } from "react-icons/ti";
import { BiListPlus } from "react-icons/bi";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaBan } from "react-icons/fa6";
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';



const usePage = () => {



    const axios = useAxiosSecure();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const email = form.email.value;
        const FormDate = form.FormDate.value;
        const ToDate = form.ToDate.value;
        const LeaveType = form.LeaveType.value;
        const Reason = form.Reason.value;



        const info = {
            Name,
            email,
            FormDate,
            ToDate,
            LeaveType,
            Reason,
        }
        console.log(info);


        try {
            const res = await axios.post('http://localhost:5000/Leave', info)
            if (res.data?.success) {
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Done ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error)
        }


    }



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
                    <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()} >
                        <span><TiPlus></TiPlus></span>  Add Request
                    </button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <h1 className="font-bold text-xl">Add Request</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <div className="mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 "> Name :</label>
                                            <input type="text" name="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Email :</label>
                                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="email" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Form Date :</label>
                                            <input type="date" name="FormDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Form Date" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">To Date :</label>
                                            <input type="date" name="ToDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="To Date" required />
                                        </div>

                                    </div>
                                    <div className="mb-6">
                                        <label class="block  text-sm font-medium text-gray-900 "> Leave Type :</label>
                                        <select required name="LeaveType" id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                            <option selected value={""}>Select Leave Type</option>
                                            <option value={'Casual Leave'}>Casual Leave</option>
                                            <option value={'Medical Leave'}>Medical Leave</option>
                                            <option value={'Maternity Leave'}>Maternity Leave</option>
                                        </select>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Leave Reason</label>
                                        <textarea type="text" name="Reason" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Reason...." required />
                                    </div>


                                    <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
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

            <div className=" flex justify-end mt-2 mr-2">
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex -space-x-px text-base h-10">
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>                                  
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                        </li>                                  
                        <li>
                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default usePage;