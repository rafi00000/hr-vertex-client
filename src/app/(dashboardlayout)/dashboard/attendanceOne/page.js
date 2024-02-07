'use client'

import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { format } from 'date-fns';


const AttendanceOne = () => {
    const axiosSecure = useAxiosSecure();
    const [user, setUser] = useState();
    const [clockOutId, setClockOutId] = useState();
    const currentTime = Date.now();
    const newDate = new Date(currentTime);
    const finalDate = format(newDate, 'yyyy-MM-dd');
    const monthName = format(newDate, 'MMMM');
    console.log(finalDate);


    const data = {
        emp_id: user?._id,
        name: user?.FullName,
        department: user?.department,
        date: finalDate,
        month: monthName
    }

    useEffect(() =>{
        axiosSecure.get("/users/riad807@gmail.com")
        .then(data =>{
            setUser(data.data.data);
        })
    }, [axiosSecure])

    const handleClockIn = async() =>{
        axiosSecure.post("/attendance", data)
        .then(res =>{
            console.log(res.data.data)
            if(res.data.data){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Clocked In`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
            setClockOutId(res.data.data._id);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleClockOut = async() =>{
        console.log(clockOutId)
        axiosSecure.patch(`/attendance/${clockOutId}`)
        .then(res =>{
            if(res.data){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Clocked Out Successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }



    return (
        <div>
            <p className="bg-white h-20 flex gap-3 justify-center items-center">
                <button className="btn bg-emerald-400 hover:bg-emerald-500" onClick={handleClockIn}>Clock In</button>
                <button className="btn bg-red-400 hover:bg-red-500" onClick={handleClockOut}>Clock Out</button>
            </p>
        </div>
    );
};

export default AttendanceOne;