"use client"

import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import Link from 'next/link';

const DepartmentsPage = () => {
    const [departments, setDepartments] = useState([])
    const [employee, setEmployee] = useState([]);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [items, setItems] = useState(0);
    const numberOfPage = Math.ceil(parseInt(items) / limit);
    const pages = [...Array(numberOfPage).keys()]

    useEffect(() =>{
        fetch(`http://localhost:5000/departments?p=${currentPage}&l=${limit}&s=${search}`)
        .then(res => res.json())
        .then(data => setDepartments(data))
        .catch(err => {
            console.log(err);
        })

        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setEmployee(data))
        .catch(err =>{
            console.log(err);
        })

        fetch("http://localhost:5000/departments/count")
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    }, [currentPage, limit, search]);

    const handleCreateDepartment = (e) =>{
        e.preventDefault();
        const form = e.target;
        const dept_name = form.name.value;
        const dept_head = form.head.value;
        const total_emp = form.number.value;
        const departmentData = {dept_name, dept_head, total_emp};
        
        axiosSecure.post("/departments", departmentData)
        .then(res =>{
            console.log(res.data)
            toast.success("Successfully Created");
            Router.reload();
        })
        .catch(err =>{
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }

    return (
        <div className="my-7">
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Employee List</p>
                <button className="btn bg-emerald-400 hover:bg-emerald-500 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Department</button>
            </div>
            
            {/* modal for creating department */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    
                    
                    <form onSubmit={handleCreateDepartment} className='space-y-4'>
                        <div className='form-control'>
                            <label>Name</label>
                            <input type="text" name='name' className='input input-bordered' />
                        </div>
                        <div className='form-control'>
                            <label>Department Head</label>
                            <select name="head" id="" className='input input-bordered'>
                                {
                                    employee?.map(name => <option key={name?._id}>{name?.FullName}</option>)
                                }
                            </select>
                        </div>
                        <div className='form-control'>
                                <label>Employee Number</label>
                                <input type="number" className='input input-bordered' name='number' />
                        </div>
                        <div>
                            <button className='btn bg-emerald-400 hover:bg-emerald-500'>Create</button>
                        </div>
                    </form>
                </div>
            </dialog>

            {/* filter and search */}
            <div className='flex justify-between items-center px-5 my-5'>
                {/* select */}
            <div className='flex gap-3 items-center'>
                <label>item per page</label>
                <select name="page" className='input input-bordered' onChange={(e) => setLimit(parseInt(e.target.value))}>
                    <option >10</option>
                    <option>15</option>
                    <option>25</option>
                </select>
                </div>
            
            {/* search bar */}
            
                <form className='flex gap-3' onSubmit={(e) => {
                    e.preventDefault();
                    setSearch("");
                    setSearch(e.target.search.value)
                    }}>

                    <input type="text" name='search' className='input input-bordered' />
                    <button className='btn bg-emerald-400 hover:bg-emerald-500 text-white'>Search</button>
                </form>

            </div>


            {/* table */}
            <div className="overflow-x-auto m-5">
                <table className="table table-zebra bg-white">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Department Name</th>
                        <th>Department Head</th>
                        <th>Total Employee</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        departments?.map((department, idx) => <tr key={department?._id}>
                        <th>{idx + 1}</th>
                        <td>{department?.dept_name}</td>
                        <td>{department?.dept_head}</td>
                        <td>{department?.total_emp}</td>
                        <td className='flex gap-2'>
                            <Link href={`/dashboard/departments/${department._id}`}><button className='btn btn-square bg-yellow-500 hover:bg-yellow-600 text-white'><FaPen /></button></Link>
                            <button className='btn btn-square bg-red-500 hover:bg-red-600 text-white'><FaRegTrashAlt /></button>
                        </td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <div className='flex gap-2 justify-center items-center'>
    {
        pages?.map((page, idx) => (
            <p key={idx} className='text-center'>
                <button
                    onClick={() => setCurrentPage(page)}
                    className={`btn btn-square ${currentPage === page && "bg-emerald-400 hover:bg-emerald-500 text-white"}`}
                >
                    {page}
                </button>
            </p>
        ))
    }
</div>
        </div>
    );
};

export default DepartmentsPage;