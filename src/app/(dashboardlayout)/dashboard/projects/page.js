"use client";

import { TiPlus } from "react-icons/ti";
import { BiListPlus } from "react-icons/bi";
import { HiOutlineSelector } from "react-icons/hi";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import Image from "next/image";

const usePage = () => {


  const axios = useAxiosSecure();
  // console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const team = form.team.value;
    const deadline = form.date.value;
    const info = {
      title,
      description,
      team,deadline
    }
    console.log(info);

//projects
    try {
      const res = await axios.post('http://localhost:5000/client', info)
      if (res.data?.success) {
        e.target.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Done ",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div className='p-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold'>projects</h1>
          <h1 className='text-sm pt-1'>dashboard / projects</h1>
        </div>
        <div className='flex items-center gap-3'>
          <div className='border bg-white p-1 rounded-sm'>
            <BiListPlus size={22}></BiListPlus>
          </div>

          {/* modal */}

          <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>
            <span><TiPlus></TiPlus></span> Add project</button>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <h1 className="font-bold text-xl">Add project</h1>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
              </form>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Project title</label>
                      <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Project title" required />
                    </div>
                    <div>12
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Deadline</label>
                      <input type="date" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Project title" required />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">team</label>
                      <select name='team' className="select select-warning w-full max-w-xs" required>
                        <option disabled selected>team</option>
                        <option value=''>ongoing</option>
                        <option value=''>completed</option>
                      </select>
                    </div>
                  </div>
                  <div className="pb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">description</label>
                    <textarea type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="description" required />
                  </div>
                  <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                    Submit
                  </button>
                </form>

              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8'>
        <input type="text" name='project' placeholder="project name" className="input input-bordered input-warning w-full max-w-xs" />
        <input type="date" name='deadline' placeholder="Client Name" className="input input-bordered input-warning w-full max-w-xs" />
        <div>
          <select name='status' className="select select-warning w-full max-w-xs" required>
            <option disabled selected>status</option>
            <option value='ongoing'>ongoing</option>
            <option value='ongoing'>completed</option>
          </select>
        </div>
        <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
          SEARCH
        </button>
      </div>


      <div className='md:grid grid-cols-3 mt-8 gap-4'>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center p-3">
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s </span>
            <p className="w-full">team leader</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
            <Image width={30} height={30} alt="team leader " className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="w-full">team members</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
              <Image width={30} height={30} alt="team member" className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center p-3">
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s </span>
            <p className="w-full">team leader</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
            <Image width={30} height={30} alt="team leader " className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="w-full">team members</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
              <Image width={30} height={30} alt="team member" className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center p-3">
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s </span>
            <p className="w-full">team leader</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
            <Image width={30} height={30} alt="team leader " className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="w-full">team members</p>
            <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
              <Image width={30} height={30} alt="team member" className="w-10 h-10 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default usePage;