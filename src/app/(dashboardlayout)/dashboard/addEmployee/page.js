"use client";

import useAxiosRequest from "@/axiosConfig/useAxiosRequest";
// import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { useState } from "react";
// import Swal from 'sweetalert2';


const AddEmployees = () => {

    const [Data, SetData] = useState("")
    const [Gender, SetGender] = useState("")
    const axiosrequest = useAxiosRequest();
    // const axios = useAxiosSecure();
    const imageapikey = process.env.VITE_IMAGE_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;



    const HandelSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const FirstName = form.FirstName.value;
        const LastName = form.LastName.value;
        const Email = form.Email.value;
        const JoiningDate = form.JoiningDate.value;
        const PhoneNumber = form.PhoneNumber.value;
        const BirthDate = form.BirthDate.value;
        const Address = form.Address.value;
        const photo = form.photo.files[0];

        const res = await axiosrequest.post(
            image_hosting_api,
            { image: photo },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );

        const PhotoUrl = res.data.data.display_url
        // console.log(PhotoUrl)

        const info = {
            FirstName,
            LastName,
            Email,
            JoiningDate,
            PhoneNumber,
            BirthDate,
            Address,
            Designation: Data,
            Gender: Gender,
            photo: PhotoUrl,
        }

        // console.log(info)


        // try {
        //     const res = await axios.post('', info)
        //     if (res.data?.success) {
        //         e.target.reset()
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "applications posted ",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    };

    return (
        <div>
            <div className='p-6 mt-4'>
                <h1 className="pb-10 font-semibold">Add Employee</h1>
                <form
                    onSubmit={HandelSubmit}
                    className="space-y-4 md:space-y-6  mt-1"
                    action="#"
                >
                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First Name :
                            </label>
                            <input
                                type="text"
                                name="FirstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="First Name"
                                required=""
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last Name :
                            </label>
                            <input
                                type="text"
                                name="LastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Last Name"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email :
                            </label>
                            <input
                                type="email"
                                name="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Email"
                                required=""
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Joining Date :
                            </label>
                            <input
                                type="date"
                                name="JoiningDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder=" Joining Date"
                                required=""
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">  Designation :</label>
                            <select onChange={(e) => SetData(e.target.value)} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                <option selected>Choose one</option>
                                <option >Accounts</option>
                                <option >Marketing</option>
                                <option >Support</option>
                                <option >Manager</option>
                                <option >CEO</option>
                            </select>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Gender:</label>
                            <select onChange={(e) => SetGender(e.target.value)} id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                <option selected>Choose one</option>
                                <option >Male</option>
                                <option >Female</option>

                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone Number :
                            </label>
                            <input
                                type="text"
                                name="PhoneNumber"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Phone Number "
                                required=""
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Birth Date :
                            </label>
                            <input
                                type="date"
                                name="BirthDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder=" Birth Date"
                                required=""
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Address :
                        </label>
                        <input
                            type="text"
                            name="Address"
                            placeholder="Address..."
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
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
                    <button
                        type="submit"
                        className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                        {" "}
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployees