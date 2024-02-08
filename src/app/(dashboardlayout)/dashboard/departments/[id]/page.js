"use client"

import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateDepartment = ({params}) => {
    const {id} = params;
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState({})


    useEffect(() => {
        axiosSecure.get(`/departments/${id}`)
        .then(res =>{
            setData(res.data);
        })
    }, [axiosSecure, id])
    console.log(data);

    const handleUpdate = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        console.log(name)
        const head = form.head.value;
        const employee = form.emp.value;
        const data = {name, head, employee};
        console.log(data)
        
        axiosSecure.put(`/departments/${id}`, data)
        .then(res => {
            console.log(res.data);
            if(res.data.success){
                Swal.fire({
                    icon: "success",
                    title: "Successfully Updated",
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 1500,
                    backdrop: true
                })
            }
        })
        .catch(err => {
            console.log(err); 
            Swal.fire({
                backdrop: true,
                allowEnterKey: true,
                icon: "error",
                title: "Successfully Updated",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 1500,
            })
        })
    }

    return (
        <div className='my-10'>
            <p className='text-center font-bold text-4xl'>Update Department</p>
            <div>
                <form className='w-4/5 md:2/3 lg:1/2 mx-auto border p-5 rounded-md' onSubmit={handleUpdate}>
                    <div className='form-control'>
                        <label>Department Name</label>
                        <input type="text" className='input input-bordered' name='name' defaultValue={data?.dept_name}/>
                    </div>
                    <div className='form-control'>
                        <label>Department Head</label>
                        <input type="text" className='input input-bordered' name='head' defaultValue={data?.dept_head} />
                    </div>
                    <div className='form-control'>
                        <label>Team Size</label>
                        <input type="number" className='input input-bordered' name='emp' defaultValue={data?.total_emp} />
                    </div>

                    <p className='text-center'><button className='btn bg-emerald-400 hover:bg-emerald-500 text-white' >Update</button></p>
                </form>
            </div>
        </div>
    );
};

export default UpdateDepartment;