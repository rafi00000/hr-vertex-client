'use client'
import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { coreContext } from '@/provider/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const EmployeeRoute = async() => {
  const axiosSecure = useAxiosSecure();
  const router = useRouter()
  const { user } = useContext(coreContext)
  // console.log(user?.email)
  try {
    const res = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
    if (res.data.data.role==='employee') {
      // console.log(res.data);
      return children
    } else {
      router.push('/')
    }
  } catch (error) {
    router.push('/')
  }
}

export default EmployeeRoute
