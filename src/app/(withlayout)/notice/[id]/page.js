import Button from '@/Components/ClintSideComponents/Button'
import useAxiosRequest from '@/axiosConfig/useAxiosRequest'
import React from 'react'

const usePage = async ({ params }) => {
    const axiosrequest = useAxiosRequest()
    try {
        const res = await axiosrequest.get(`/recruitment/${params.id}`)
        const data = res.data
        // console.log(res.data)
        return (
            <>
                <div className=" bg-[url('https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png')] md:py-36 py-48">
                    <p className='text-center text-white text-xl pb-2'>notice details</p>
                    <h3 className="md:text-3xl text-3xl font-bold text-center block uppercase text-white">{data?.position}</h3>
                </div>
                <div className='min-h-screen container mx-auto py-16'>
                    <h3 className='text-xl font-bold'>{data?.position}</h3>
                    <p className='font-semibold pt-2'>department :</p>
                    <p className='text-gray-500 font-semibold py-1'>{data?.department}</p>
                    <p className='font-semibold pt-2'>responsibilities :</p>
                    <p className=' opacity-90'>{data?.responsibilities}</p>
                    <p className='font-semibold pt-2'>requirements :  </p>
                    <p className='py-1 opacity-80'>{data?.requirements}</p>
                    <p className='font-semibold pt-2'>deadline :</p>
                    <p className='pb-3 font-extrabold'>{data?.applicationDeadline?.split('T')[0]}
                    </p>
                    <span className='flex justify-end items-center'>
                        <Button text='apply now' />
                    </span>
                </div>
            </>
        )
    } catch (error) {
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading notice data</div>;
    }
}

export default usePage