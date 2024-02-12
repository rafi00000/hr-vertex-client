'use client'
import DataGet from '@/config/DataGet';
import DataPost from '@/config/DataPost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { TiPlus } from "react-icons/ti";
import Swal from 'sweetalert2';
const usePage = async () => {
    const router = useRouter();
    const holidaysData = await DataGet('holidays')
    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const total = form.total.value;
        const holiday = form.holiday.value;
        const date = form.date.value;
        const data = { total, holiday, date }
        console.log(data)
        const res = await DataPost('holidays', data)
        if (res.success) {
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Done ",
                showConfirmButton: false,
                timer: 1500
            });
            router.refresh()
        }
    };
    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>Holydays</h1>
                    <h1 className='text-sm pt-1'>dashboard / Holydays</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <span><TiPlus></TiPlus></span> Add Holyday</button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <h1 className="font-bold text-xl text-center"> Holydays</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <div className="mt-5">
                                <h4 className="text-3xl py-4 text-center font-semibold">add Holyday </h4>
                                <form className="space-y-4" onSubmit={handleForm}>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">DATE</label>
                                        <input
                                            type="date"
                                            placeholder="DATE"
                                            className="input input-bordered"
                                            name="date"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">HOLIDAY NAME</label>
                                        <input
                                            type="text"
                                            placeholder="HOLIDAY NAME"
                                            className="input input-bordered"
                                            name="holiday"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">TOTAL</label>
                                        <input
                                            type="text"
                                            placeholder="HOLIDAY NAME"
                                            className="input input-bordered"
                                            name="total"
                                        />
                                    </div>

                                    <div className="flex  justify-center">
                                        <button
                                            type="submit"
                                            className="font-bold btn mt-9  bg-white w-full"
                                        >
                                            ADD
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div >
            </div >

            <div className='grid grid-cols-4 gap-4 mt-8'>
                <input type="text" name='project' placeholder="project name" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="date" name='deadline' placeholder="Client Name" className="input input-bordered input-warning w-full max-w-xs" />
                <div>
                    <select name='status' className="select select-warning w-full max-w-xs" required>
                        <option disabled selected>status</option>
                        <option value='ongoing'>ongoing</option>
                        <option value='ongoing'>completed</option>
                    </select>
                </div>
                <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                    SEARCH
                </button>
            </div>

            <div className="overflow-x-auto mt-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-black bg-slate-300'>
                            <th></th>
                            <th>holiday</th>
                            <th>date</th>
                            <th>total</th>
                            <th>actions</th>

                        </tr>
                        {/* { total, holiday, date } */}
                    </thead>
                    <tbody>
                        {
                            holidaysData?.map((item, index) =>
                                <tr key={item?._id} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item?.holiday}
                                    </td>
                                    <td>
                                        {item?.date.split('T')[0]}
                                    </td>
                                    <td className="font-bold">
                                        {item?.total}
                                    </td>

                                    <td>
                                        <Link href={`/dashboard/allEmployee/${item?._id}`}>
                                            <button className="btn btn-ghost btn-xs border"><FaEdit size={20} color='green'></FaEdit>
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDeleted(item?._id)} className="btn btn-ghost btn-xs border"><MdDelete size={20} color='red'></MdDelete></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default usePage
