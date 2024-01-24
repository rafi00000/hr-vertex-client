"use client";
import Button from "@/Components/ClintSideComponents/Button";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {


    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    };


    return (
        <div className='my-40'>
            <div>
                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>LOGIN</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="modal-action  py-16">
                            <div
                                className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg "
                            >
                                <form className="space-y-4" onSubmit={handleForm}>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">Email</label>
                                        <input
                                            type="Email"
                                            placeholder="Enter your nEmail"
                                            className="input input-bordered"
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="input input-bordered"
                                            name="password"
                                        />
                                    </div>

                                    <div className="flex  justify-center">
                                        <button type="submit" className="font-bold btn  bg-teal-400 w-full">LOGIN</button>
                                    </div>
                                </form>
                                <div className="mt-5">
                                    <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><FcGoogle></FcGoogle> GOOGLE</button>
                                </div>
                            </div>

                            <form method="dialog">
                                <button className="btn">BACK</button>
                            </form>
                        </div>

                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default LoginPage;