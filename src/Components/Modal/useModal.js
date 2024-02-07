"use client";


import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { coreContext } from "@/provider/AuthContext";
import { useContext } from "react";
import Swal from 'sweetalert2';


const useModal = () => {

    const { user } = useContext(coreContext)
    const axios = useAxiosSecure();
    // console.log(user)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const education = form.education.value;
        const experience = form.experience.value;
        const resume = form.resume.value;

        const info = {
            name,
            email,
            phone,
            address,
            education,
            experience,
            resume
        }
        // console.log(info);


        try {
            const res = await axios.post('/applications', info)
            if (res.data?.success) {
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "applications posted ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div>
            <label htmlFor="my_modal_6" className="btn bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Apply Now</label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Phone Number</label>
                                <input
                                    type="number"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered"
                                    name="phone"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="input input-bordered"
                                    name="address"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Education</label>
                                <input
                                    type="text"
                                    placeholder="Enter your education background"
                                    className="input input-bordered"
                                    name="education"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Work Experience</label>
                                <input
                                    type="number"
                                    placeholder="Enter your work experience"
                                    className="input input-bordered"
                                    name="experience"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="text-md font-semibold">resume Link</label>
                                <input
                                    type="text"
                                    placeholder="Enter your link"
                                    className="input input-bordered"
                                    name="resume"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <button type="submit" className="btn bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 mt-10">Submit Application</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="w-full btn bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );




};

export default useModal; 