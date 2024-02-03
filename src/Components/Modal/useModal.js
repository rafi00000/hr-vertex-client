"use client";

import { coreContext } from "@/provider/AuthContext";
import { useContext } from "react";



const useModal = () => {

    const { user } = useContext(coreContext)
    console.log(user)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const emailAddress = form.emailAddress.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const education = form.education.value;
        const workExperience = form.workExperience.value;
        const cv = form.cv.value;

        const data = {
            fullName, address, phoneNumber, emailAddress, education, workExperience, cv
        }
        console.log(data);


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
                                    name="fullName"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"
                                    name="emailAddress"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="input input-bordered"
                                    name="phoneNumber"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="text-md font-semibold">Address</label>
                                <input
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
                                    placeholder="Enter your work experience"
                                    className="input input-bordered"
                                    name="workExperience"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="text-md font-semibold">CV Link</label>
                                <input
                                    placeholder="Enter your link"
                                    className="input input-bordered"
                                    name="cv"
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