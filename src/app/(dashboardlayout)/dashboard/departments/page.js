"use client"

import useAxiosSecure from '@/axiosConfig/useAxiosSecure';
import { useState, useEffect } from 'react';

const DepartmentsPage = () => {
    const [departments, setDepartments] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() =>{
        axiosSecure.get("/departments?p=&l=&s=")
        .then(res => {
            console.log(res.data);
            setDepartments(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [axiosSecure]);



    return (
        <div>
            
        </div>
    );
};

export default DepartmentsPage;