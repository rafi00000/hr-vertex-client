'use client'
import Button from '@/Components/ClintSideComponents/Button';
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const useReqruitment = async () => {
    const axiosSecure = useAxiosSecure();
    const router = useRouter()
    const { user } = useContext(coreContext)
    try {
        const response = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
        // console.log(response.data)
        //
        if (response?.data?.data?.role === 'admin') {
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
                // console.log(data);
                const res = await axiosSecure.post('/recruitment', data)
                if (res.data?.success) {
                    e.target.reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "reqruitment notice posted ",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    // console.log(res.data);
                }
            }
            return (
                <div className="p-5 container  mx-auto my-4  rounded-lg h-screen overflow-y-scroll">
                    <h3 className="text-center pt-10 uppercase text-3xl font-bold">RECRUITMENT notice   </h3>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">position :</label>
                                <input type="text" name="position" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="position..." required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 "> department :</label>
                                <textarea type="text" name="department" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="department..." required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 "> responsibilities :</label>
                                <textarea type="text" name="responsibilities" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="responsibilities..." required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 "> requirements :</label>
                                <input type="text" name="requirements" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="requirements..." required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 "> applicationDeadline :</label>
                                <input type="date" name="applicationDeadline" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="applicationDeadline..." required="" />
                            </div>
                            <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">post notice</button>

                        </form>

                    </div>
                </div>
            )
        } else {
            router.push('/')
        }

    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading reqruitment form</div>;
    }

}

export default useReqruitment
