"use client";


import Image from 'next/image'
import React from 'react'

import Button from '@/Components/ClintSideComponents/Button';
import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Banner = () => {

    const [showpassword, setshowpassword] = useState(false)

    const HandelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, password, email, photo)


        if (password.length < 8) {
            alert('password less than 8 characters')
        } else if (!/[A-Z]/.test(password)) {
            alert('password should have a one uppercase characters')
        } else if (!/[a-z]/.test(password)) {
            alert('password should have a one lowercase characters')
        } else if (!/[@,$,#,%,&]/.test(password)) {
            alert('password should have a one spaical characters')
        }


    }




    return (
        <div className='bg-[url("https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png")] w-full px-10'>
            <div className=' relative container mx-auto'>
                <span className=' block md:py-36 py-40 '>
                    <h2 className='lg:text-5xl md:text-3xl text-2xl text-teal-300 max-w-[600px] pt-8 '>
                        Human Resource Management System
                    </h2>
                    <p className='text-teal-300 max-w-[600px] py-5 opacity-70'>
                        HR Management Systems are essential for businesses aiming to streamline HR processes. These systems automate routine tasks, enhance data accuracy, and facilitate better communication among team members. By leveraging HRMS, organizations can optimize resource allocation, reduce administrative overhead, and empower HR teams to focus on strategic initiatives that drive business success.
                    </p>

                    <button className='bg-teal-300 text-gray-700 hover:scale-105 active:scale-95 transition-all px-8 py-2 uppercase rounded-sm font-semibold'
                        onClick={() => document.getElementById('my_modal_5').showModal()}>SING UP</button>
                    <dialog id="my_modal_5" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div className="modal-action  py-16">
                                <section className="bg-gray-50  border w-full">
                                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                                    Create and account
                                                </h1>
                                                <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
                                                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Name..." required="" />
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email :</label>
                                                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Email..." required="" />
                                                    </div>

                                                    <div className="relative">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password :</label>
                                                        <input type={showpassword ? 'text' : "password"}
                                                            name="password"
                                                            placeholder="••••••••"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                            required="" />
                                                        <span className="absolute top-10 right-3" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL :</label>
                                                        <input type="text" name="photo" placeholder="photo..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " required="" />
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required="" />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> Create an account</button>

                                                </form>

                                                <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><FcGoogle></FcGoogle> GOOGLE</button>
                                                <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><FaGithub></FaGithub> GITHUB</button>

                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline "><span className="text-blue-700">Login here</span></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <form method="dialog">
                                    <button className="btn">BACK</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </span>
            </div>
        </div>
    )
}

export default Banner
