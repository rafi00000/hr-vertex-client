"use client";

import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2';


const usePage = async () => {

    const axiosSecure = useAxiosSecure();
    const response = await axiosSecure.get('http://localhost:5000/users',);
    const Data = response.data




    const handleDeleted = async (_id) => {

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`/users/${_id}`);
                console.log('Employee deleted successfully:', res.data);

                Swal.fire(
                    'Deleted!',
                    'The Employee has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting Employee:', error);
                Swal.fire(
                    'Error!',
                    'Failed to delete the Employee.',
                    'error'
                );

            }
        }
    }


    return (
        <div className='p-7'>
            <h1 className="pb-10 pl-7 font-semibold text-lg">Add Employee</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-black bg-slate-300'>
                            <th></th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            Data?.map(item =>
                                <tr key={item?._id} >
                                    <th>
                                        <div className="avatar border rounded-full p-1 bg-white">
                                            <div className="w-10  rounded-full">
                                                <Image height={100} width={100} src={item?.photo} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                {item?.FullName}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.Designation}</td>
                                    <td>{item?.PhoneNumber}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.JoiningDate.slice(0, 10)}</td>
                                    <th>
                                        <Link href={`/dashboard/allEmployee/${item?._id}`}>
                                            <button className="btn btn-ghost btn-xs border"><FaEdit size={20} color='green'></FaEdit>
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDeleted(item?._id)} className="btn btn-ghost btn-xs border"><MdAutoDelete size={20} color='red'></MdAutoDelete></button>
                                    </th>
                                </tr>)
                        }

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