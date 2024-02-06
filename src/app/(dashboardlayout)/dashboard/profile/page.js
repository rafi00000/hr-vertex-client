'use client'
import ProfilePage from "@/Components/SharedComponents/dashboard/ProfilePage"
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const useDashboardmain = async () => {
  const router = useRouter()
  const { user } = useContext(coreContext)
  try {
      return (
        <div className=''>
          <ProfilePage></ProfilePage>
        </div>
      )

  } catch (error) {
    // Handle error appropriately
    console.error("Error fetching user data:", error);
    return <div className='text-center text-4xl font-bold py-20'>Error loading profile data</div>;
  }

}

export default useDashboardmain
