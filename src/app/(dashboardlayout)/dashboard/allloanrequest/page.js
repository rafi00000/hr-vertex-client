'use client'

import { coreContext } from "@/provider/AuthContext"
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react"

const usePage = async () => {
    const { user } = useContext(coreContext)
        return (
            <div >
                <span className="flex justify-end items-center py-3 pr-4"><Link className="btn bg-emerald-400" href={'addholyday'}>add new</Link></span>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>progile</th>
                                <th>name</th>
                                <th>email</th>
                                <th>amount</th>
                                <th>date</th>
                                <th>reason</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                data.map(item => <tr key={item?._id}>
                                    <td>
                                        <Image className="rounded-full" src={item?.user?.PhotoUrl} alt="profile" height={30} width={30} />
                                    </td>
                                    <td>{item?.user?.name}</td>
                                    <td>{item?.user?.email}</td>
                                    <td>{item?.amount}</td>
                                    <td>{item?.applicationDeadline?.split('T')[0]}</td>
                                    <td>{item?.reason}</td>
                                    <td>
                                        <button className="btn bg-emerald-400">delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody> */}
                    </table>
                </div>
            </div>
        )

    

}

export default usePage
