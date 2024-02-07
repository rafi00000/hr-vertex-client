"use client";

import { coreContext } from "@/provider/AuthContext";
import { useContext, useState } from "react";



const ApplicationModal = () => {

    const { user } = useContext(coreContext)

    console.log(user)
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        education: '',
        workExperience: '',
        cv: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };


    return (
        <div> 
            <label htmlFor="my_modal_6" className="btn btn-accent">Apply Now</label>
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
                                <button type="submit" className="btn btn-accent mt-10">Submit Application</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationModal;