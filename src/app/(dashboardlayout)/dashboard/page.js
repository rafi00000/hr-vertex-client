'use client'
import ProfilePage from "../../../Components/SharedComponents/dashboard/ProfilePage"
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const useDashboardmain = async () => {
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const { user, loading } = useContext(coreContext);

  try {
    const response = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
    // console.log(response.data)
    if (response?.data?.data?.role === 'admin') {
      return (
        <div className=''>
          <ProfilePage></ProfilePage>
        </div>
      )
    } else {
      if(loading){
        return <p className="text-center font-semibold text-xl">Loading</p>
      }
      router.push('/login')
    }

  } catch (error) {
  // Handle error appropriately
  console.error("Error fetching user data:", error);
  return <div className='text-center text-4xl font-bold py-20'>Error loading profile data</div>;
  }
}
export default useDashboardmain;