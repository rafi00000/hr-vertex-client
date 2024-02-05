import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";



const usePage = async () => {

    const axiosSecure = useAxiosSecure();

    const response = await axiosSecure.get('http://localhost:5000/users',);
    const Data = response.data

    return (
        <div className='p-7'>
            {/* <h1 className="pb-10 pl-7 font-semibold text-lg">Add Employee</h1> */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-black'>
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
                            Data?.slice(5, 10).map(item =>
                                <tr key={item?._id} >
                                    <th>
                                        <div className="avatar border rounded-full p-1 bg-white">
                                            <div className="w-10  rounded-full">
                                                <img src={item.photo} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                {item.FullName}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.Designation}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>{item.email}</td>
                                    <td>{item.JoiningDate.slice(0, 10)}</td>
                                    <th>
                                        <Link href={`/dashboard/editEmployee`}>
                                            <button className="btn btn-ghost btn-xs border"><FaEdit size={20} color='green'></FaEdit>
                                            </button>
                                        </Link>
                                        <button className="btn btn-ghost btn-xs border"><MdAutoDelete size={20} color='red'></MdAutoDelete></button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default usePage;