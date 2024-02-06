"use client"

import useAxiosSecure from "@/axiosConfig/useAxiosSecure";




const useEmployee = async ({ params }) => {
    const id = params?.id
    // console.log(id)

    const axiosSecure = useAxiosSecure();


    const response = await axiosSecure.get(`http://localhost:5000/users/${id}`);
    const Data = response.data
    // console.log(Data)


    return (
        <div>
            {id}
        </div>
    );
};

export default useEmployee;