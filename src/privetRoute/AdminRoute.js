'use client'
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const AdminRoute = async ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const router = useRouter()
  const { user } = useContext(coreContext)
  try {
    const res = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
    if (res.data.data.role==='admin') {
      // console.log(res.data);
      return children
    } else {
      router.push('/')
    }
  } catch (error) {
    router.push('/')
  }
}

export default AdminRoute
