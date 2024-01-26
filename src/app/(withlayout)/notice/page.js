import Button from '@/Components/ClintSideComponents/Button';
import useAxiosRequest from '@/axiosConfig/useAxiosRequest';
import Link from 'next/link';
import React from 'react'

const usePage = async () => {
    const axiosrequest = useAxiosRequest()
    try {
        const res = await axiosrequest.get('/recruitment', { next: { revalidate: 100 } });
        const data = res.data
        // console.log(data);
        return (
            <>
                <h3 className="text-center pt-10 uppercase text-3xl font-bold">All RECRUITMENT notice </h3>
                <div className='container mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6  py-10'>
                    {
                        data?.map(item => <div className='bg-[url("https://i.ibb.co/6v00Ygs/recruitment-process1.jpg")] bg-opacity-45 shadow-xl rounded p-4' key={item?._id}>
                            <h3 className='text-xl font-bold'>{item?.position}</h3>
                            <p className='text-gray-500 font-semibold py-1'> department : {item?.department}</p>
                            <p className='pb-2 opacity-80'>responsibilities :  {item?.responsibilities.slice(0,150)}</p>
                            <Link className='flex justify-end items-center pt-2' href={`notice/${item?._id}`}>
                               <Button text=' details' />
                            </Link>
                        </div>)
                    }
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading notice data</div>;
    }
};
export default usePage
