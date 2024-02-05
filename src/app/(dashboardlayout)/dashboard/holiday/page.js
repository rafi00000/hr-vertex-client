'use client'

import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { coreContext } from "@/provider/AuthContext"
import Link from "next/link";
import { useContext, useState } from "react"

const usePage = async () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(coreContext)
    const response = await axiosSecure.get(`/users/${user?.email}`, { params: { next: { revalidate: 100 } } });
    if (response?.data?.data?.role === 'employee' || response?.data?.data?.role === 'admin') {
        const res = await axiosSecure.get(`/holidays`, { params: { next: { revalidate: 100 } } });
        const data = res.data;
        return (
            <div >
                <span className="flex justify-end items-center py-3 pr-4"><Link className="btn bg-emerald-400" href={'addholyday'}>add new</Link></span>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>total</th>
                                <th>holiday</th>
                                <th>date</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr key={item?._id}>
                                    <td>{item?.total}</td>
                                    <td>{item?.holiday}</td>
                                    <td>{item?.holiday}</td>
                                    <td>
                                        <button className="btn bg-emerald-400">delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}

export default usePage
