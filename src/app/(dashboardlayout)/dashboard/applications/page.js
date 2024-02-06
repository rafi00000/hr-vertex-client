'use client'

import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
const usePage = async () => {
    const axiosSecure = useAxiosSecure();
    const router = useRouter()
    const { user } = useContext(coreContext)
    const [show, setshow] = useState(false)
    //const [applicationdata, setAppicationData] = useState([]);
    //

    try {

        const HandelSubmit = async (e) => {
            e.preventDefault()
            const form = e.target;
            const position = form.position.value;
            const department = form.department.value;
            const responsibilities = form.responsibilities.value;
            const requirements = form.requirements.value;
            const applicationDeadline = form.applicationDeadline.value;
            const data = {
                position, department, responsibilities, requirements, applicationDeadline
            }
            console.log(data);
            // const res = await axiosSecure.post('/recruitment', data)
            // console.log(res.data);
        }
        const res = await axiosSecure.get('/users', { params: { next: { revalidate: 100 } } });
        const applicationdata = res.data;


        const handleDelete = async (email) => {
            // Display a confirmation dialog using SweetAlert2
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
                    const res = await axiosSecure.delete(`/users/${email}`);
                    console.log('Application deleted successfully:', res.data);
                    // Update the local state to remove the deleted user
                    //setAppicationData(prevData => prevData.filter(item => item?._id !== email));

                    // Display a success message using SweetAlert2
                    Swal.fire(
                        'Deleted!',
                        'The application has been deleted.',
                        'success'
                    );
                } catch (error) {
                    console.error('Error deleting application:', error);
                    // Display an error message using SweetAlert2
                    Swal.fire(
                        'Error!',
                        'Failed to delete the application.',
                        'error'
                    );
                    // Handle error appropriately
                }
            }
        };

        return (
            <div className="p-5 container  mx-auto my-4  rounded-lg h-screen overflow-y-scroll">
                <div className="overflow-x-auto" >
                    <h3 className="text-center pt-10 uppercase text-3xl font-bold">all applications  </h3>
                    <div className="overflow-x-auto" >
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='font-bold'>Candidate</th>
                                    <th className='font-bold'>email</th>
                                    <th className='font-bold'>job</th>
                                    <th className='font-bold'>action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicationdata.map(item => <tr key={item?._id} className="bg-base-200">
                                        <td>{item?.name}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.job}</td>
                                        <td>
                                            <button className='bg-emerald-400 text-gray-700 cursor-pointer hover:scale-105 active:scale-95 transition-all px-8 py-2' onClick={() => handleDelete(item?._id)} >
                                                Delete</button>
                                        </td>

                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div >
                    {
                        show && <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">position :</label>
                                    <input type="text" name="position" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="position..." required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> department :</label>
                                    <textarea type="text" name="department" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="department..." required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> responsibilities :</label>
                                    <textarea type="text" name="responsibilities" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="responsibilities..." required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> requirements :</label>
                                    <input type="text" name="requirements" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="requirements..." required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> applicationDeadline :</label>
                                    <input type="date" name="applicationDeadline" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="applicationDeadline..." required="" />
                                </div>
                                <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">post notice</button>

                            </form>

                        </div>
                    }
                </div>
            </div>
        )

    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading applications data</div>;
    }

};

export default usePage
