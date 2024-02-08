"use client";

import { TiPlus } from "react-icons/ti";
import { BiListPlus } from "react-icons/bi";
import { HiOutlineSelector } from "react-icons/hi";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";

const usePage = () => {


    const axios = useAxiosSecure();
    // console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const FirstName = form.FirstName.value;
        const LastName = form.LastName.value;
        const Email = form.Email.value;
        const password = form.Password.value;
        const Company = form.Company.value;
        const Phone = form.Phone.value;
        const ClientId = form.ClientId.value;


        const info = {
            FirstName,
            LastName,
            Email,
            password,
            Company,
            Phone,
            ClientId
        }
        console.log(info);


        try {
            const res = await axios.post('http://localhost:5000/client', info)
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
                    <h1 className='font-bold'>Clients</h1>
                    <h1 className='text-sm pt-1'>dashboard / Clients</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='border bg-white p-1 rounded-sm'>
                        <BiListPlus size={22}></BiListPlus>
                    </div>

                    {/* modal */}

                    <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <span><TiPlus></TiPlus></span> Add Client</button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <h1 className="font-bold text-xl">Add Client</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <div className="mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                                            <input type="text" name="FirstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="First Name" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                                            <input type="text" name="LastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Last Name" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                                            <input type="text" name="Company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Company" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                                            <input type="number" name="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                        </div>

                                    </div>
                                    <div className="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                                        <input type="email" name="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Client Id</label>
                                        <input type="password" name="ClientId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
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

            <div className='grid grid-cols-4 gap-4 mt-8'>
                <input type="text" placeholder="Client id" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="text" placeholder="Client Name" className="input input-bordered input-warning w-full max-w-xs" />
                <div>
                    <select className="select select-warning w-full max-w-xs">
                        <option disabled selected>select Company</option>
                        <option>Company 1</option>
                        <option>Company 2</option>
                        <option>Company 3</option>
                        <option>Company 4</option>
                        <option>Company 5</option>
                    </select>
                </div>
                <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                    SEARCH
                </button>
            </div>


            <div className='grid grid-cols-4 mt-8 gap-4'>



                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar offline">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>


                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>


                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>


                <div className=" bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>


                        <div className="flex gap-1 mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">Message</a>

                            <a href="#" className="inline-flex items-center px-2 py-2  font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3 text-xs">View Profile</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" flex justify-end mt-5 mb-3 mr-2">
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