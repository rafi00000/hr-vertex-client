'use client'
import Button from '@/Components/ClintSideComponents/Button';
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
const usePage = async () => {
    const axiosSecure = useAxiosSecure();
    const router = useRouter()
    const { user } = useContext(coreContext)
    //
    try {
        const response = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
        console.log(response.data)
        if (response?.data?.data?.role === 'admin') {
            const res = await axiosSecure.get('/users', { params: { next: { revalidate: 100 } } });
            const userData = res.data
            return (
                <div className="overflow-x-auto h-screen overflow-y-auto" >
                    <h3 className='uppercase text-3xl font-bold pt-10 pb-3 text-center'>all employees</h3>
                    <p className='text-right'><button className='btn bg-emerald-400 hover:bg-emerald-400 hover:text-white'> + Create an Employee</button></p>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-bold'>Name</th>
                                <th className='font-bold'>email</th>
                                <th className='font-bold'>gender </th>
                                <th className='font-bold'>salary </th>
                                <th className='font-bold'>leaves </th>
                                <th className='font-bold'>loan </th>
                                <th className='font-bold'>action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map(item => <tr key={item?._id} className="bg-base-200">
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.gender}</td>
                                    <td>{item?.salary}</td>
                                    <td>{item?.leaves}</td>
                                    <td>{item?.loan}</td>
                                    <td>
                                        <Button text='delete' />
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div >

            );
        } else {
            router.push('/')
        }

    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading user data</div>;
    }

};

export default usePage
