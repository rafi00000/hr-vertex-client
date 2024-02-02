"use client";
import useAxiosRequest from '@/axiosConfig/useAxiosRequest';
import React from 'react';

const CreatePage = () => {
    const axiosrequest = useAxiosRequest();
    const imageapikey = process.env.VITE_IMAGE_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;
    const HandelSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const photo = form.photo.files[0];
        const description = form.description.value;
        const duration = form.duration.value;
        const date = form.date;

        console.log(name, duration, description, photo, date);
  
        
        const res = await axiosrequest.post(
            image_hosting_api,
            { image: photo },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        console.log(res.data.data.display_url);
    };



    return (
        <div className='p-6'>
            <form
                onSubmit={HandelSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
            >
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name :
                    </label>
                    <input
                        type="text"
                        name="Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Name..."
                        required=""
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Photo :
                    </label>
                    <input
                        type="file"
                        name="photo"
                        placeholder="photo..."
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                        required=""
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description :
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="description..."
                        required=""
                    />

                </div>

                <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Duration :
                    </label>
                    <input
                        type='number'
                        name="duration"
                        placeholder="duration..."
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required=""
                    />
                </div>
                <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Date  :
                    </label>
                    <input
                        type='date'
                        name="date "
                        placeholder="date..."
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required=""
                    />
                </div>


                <button
                    type="submit"
                    className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                    {" "}
                    Create Program
                </button>
            </form>
        </div>
    );
};

export default CreatePage;