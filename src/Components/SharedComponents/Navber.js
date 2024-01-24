'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import Button from "@/Components/ClintSideComponents/Button";
import { FcGoogle } from "react-icons/fc";


const Navber = () => {

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
  };



  const [show, setshow] = useState(false)

  const showmenu = () => {
    setshow(!show)
  }
  // console.log(show);
  return (
    <div className=' border-t text-teal-500 py-2 max-w-[1366px] mx-auto relative px-5'>
      <div id='meinmenu' className={`transition-all overflow-hidden ${show ? 'flex flex-col justify-center items-start opacity-100 h-auto w-64 p-4 shadow-2xl rounded-lg bg-teal-500 text-black' : 'w-0 h-0 opacity-0'} md:h-auto md:w-auto opacity-100 md:flex md:justify-between md:items-center py-2 `}>
        <span className='font-bold text-4xl '>
          hr-vertex
        </span>
        <div className={`uppercase ${show ? 'flex-col justify-center items-start' : 'flex-row'} flex md:justify-center md:items-center gap-2`}>
          <Link className='hover:scale-105 active:scale-95' href='/'>
            home
          </Link>
          <Link className='hover:scale-105 active:scale-95' href='/about'>
            about
          </Link>
          <Link className='hover:scale-105 active:scale-95' href='/contact'>
            contact
          </Link>
        </div>
      
        <button className='bg-teal-300 text-gray-700  cursor-pointer hover:scale-105 active:scale-95 transition-all px-8 py-2 uppercase rounded-sm font-semibold' onClick={() => document.getElementById('my_modal_4').showModal()}>SING IN</button>
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
      <span className={`md:hidden flex justify-between items-center ml-auto absolute w-full top-3 `}>
        < span className={`font-bold text-4xl ${show ? 'h-0 w-0' : 'h-auto w-auto'} overflow-hidden`}>
          hr-vertex
        </span>
        <span className={`${show ? 'rotate-90' : 'rotate-0'} transition-all`}>
          <Button text={<IoMenuSharp />} handeler={showmenu} textcolor='text-teal-500' background='bg-transparent' textsize='text-3xl' />
        </span>
      </span>
    </div >
  )
}

export default Navber
