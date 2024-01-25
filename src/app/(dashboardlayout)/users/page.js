import useAxiosSecure from '@/app/axiosConfig/useAxiosSecure'
import React from 'react'

const page = async () => {
    const axiosSecure = useAxiosSecure();

    try {
        const userData = await axiosSecure.get('/user', { next: { revalidate: 3600 } });

        return ( 
            <div className = "overflow-x-auto" >
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>role </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
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

export default page
