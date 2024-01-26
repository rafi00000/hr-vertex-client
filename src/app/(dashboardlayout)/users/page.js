import Button from '@/Components/ClintSideComponents/Button';
import useAxiosSecure from '@/axiosConfig/useAxiosSecure'
import React from 'react'

const usePage = async () => {
    const axiosSecure = useAxiosSecure();

    try {
        const res = await axiosSecure.get('/users', { next: { revalidate: 3600 } });
        const userData = res.data
        // console.log(userData)
        return (
            <div className="overflow-x-auto" >
                <h3 className='uppercase text-3xl font-bold pt-10 pb-3 text-center'>all employees</h3>
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
    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading user data</div>;
    }
};

export default usePage
