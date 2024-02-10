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
      return (
        <div className=''>
          <ProfilePage></ProfilePage>
        </div>
      )
  } catch (error) {
  console.error("Error fetching user data:", error);
  return <div className='text-center text-4xl font-bold py-20'>Error loading profile data</div>;
  }
}
export default useDashboardmain;