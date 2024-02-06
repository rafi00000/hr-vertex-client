'use client'
import Button from '@/Components/ClintSideComponents/Button';
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
const usePage = async () => {
    const axiosSecure = useAxiosSecure();
    const router = useRouter()
    const { user } = useContext(coreContext)
    try {
            const deleteNotice=id=>{
                console.log(id);
            }
            const res = await axiosSecure.get('/recruitment', { params: { next: { revalidate: 100 } } });
            const userData = res.data
            return (
                <div className="h-screen overflow-y-scroll">
                    <div className="overflow-x-auto min-h-screen overflow-y-scroll" >
                        <h3 className='uppercase text-3xl font-bold pt-10 pb-3 text-center'>all notice</h3>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='font-bold'>position</th>
                                    <th className='font-bold'>department</th>
                                    <th className='font-bold'>application Deadline </th>
                                    <th className='font-bold'>action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map(item => <tr key={item?._id} className="bg-base-200">
                                        <td>{item?.position}</td>
                                        <td>{item?.department}</td>
                                        <td>{item?.applicationDeadline?.split('T')[0]}</td>
                                        <td>
                                            <Button handeler={deleteNotice} peramiter={item?._id} background='bg-red-400' text='delete' />
                                            <Link className='mx-1' href={`/notice/${item?._id}`}>
                                                <Button text='details' />
                                            </Link>
                                        </td>

                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div >
                </div>

            );
    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading reqruitment data</div>;
    }

}

export default usePage
