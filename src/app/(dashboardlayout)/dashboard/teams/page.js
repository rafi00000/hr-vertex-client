"use client";

import { TiPlus } from "react-icons/ti";
import { BiListPlus } from "react-icons/bi";
import Image from "next/image";
import { Suspense, useState } from "react";
import EmployeeOption from "@/Components/SharedComponents/dashboard/EmployeeOption/EmployeeOption";
import DataPost from "@/config/DataPost";
import DataGet from "@/config/DataGet";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Datapatch from "@/config/Datapatch";
import Swal from "sweetalert2";
const usePage = async () => {
  // const [submiting, setsubmiting] = useState(false)
  const router = useRouter()
  const teamData = await DataGet('team')
  // const [data,setdata]=useState('')
  // console.log(teamData)
  const addMember = async (e, _id, teamname) => {
    const memberId = e.target.member.value
    const info = { memberId, _id, teamname }
    try {
      const res = await Datapatch('team', info)
      console.log(res)
      if (res?.success) {
        e.target.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Done ",
          showConfirmButton: false,
          timer: 1500
        });
        router.refresh()
      }
    } catch (error) {
      router.refresh()
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setsubmiting(true)
    const form = e.target;
    const teamname = form.teamname.value;
    const teamdepartment = form.teamdepartment.value;
    const leader = form.leader.value;
    const info = {
      teamname,
      teamdepartment,
      leader
    }
    try {
      const res = await DataPost('team', info)
      // setsubmiting(false)
      if (res?.success) {
        e.target.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Done ",
          showConfirmButton: false,
          timer: 1500
        });
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='p-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold'>tems</h1>
          <h1 className='text-sm pt-1'>dashboard / teams</h1>
        </div>
        <div className='flex items-center gap-3'>
          <div className='border bg-white p-1 rounded-sm'>
            <BiListPlus size={22}></BiListPlus>
          </div>
          <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>
            <span><TiPlus></TiPlus></span> Add team</button>

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
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">team name</label>
                      <input type="text" name="teamname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="team name" required />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">team department</label>
                      <input type="text" name="teamdepartment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="team department" required />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">leader</label>
                      <select name='leader' className="select select-warning w-full max-w-xs" required>
                        <option disabled selected>employees</option>
                        <Suspense fallback="<option value=''>ongoing</option>">
                          <EmployeeOption />
                        </Suspense>
                      </select>
                    </div>
                  </div>
                  {/* <div className="pb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">description</label>
                    <textarea type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="description" required />
                  </div> */}
                  <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                    {/* {submiting?'loading...':'Submit'} */}
                    submit
                  </button>
                </form>

              </div>
            </div>
          </dialog>
        </div >
      </div >

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
        {
          teamData.map(item => <div key={item?._id} className=" bg-white border border-gray-200 rounded-lg shadow">
            <dialog id={`addmember${item?.teamname}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center uppercase">team : {item?.teamname}</h3>
                <p className="font-semibold  text-center ">add Member</p>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  addMember(e, item?._id, item?.teamname)
                }}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">member</label>
                    <select name='member' className="select select-warning w-full" required>
                      <option disabled selected>employees</option>
                      <Suspense fallback="<option value=''>ongoing</option>">
                        <EmployeeOption />
                      </Suspense>
                    </select>
                  </div>
                  <button className="btn m-2">submit</button>
                </form>
              </div>
            </dialog>
            <div className="flex justify-end px-4 pt-4">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center p-3">
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">{item?.teamname}</h5>
              <span className="text-sm text-gray-500  dark:text-gray-400">department : {item?.teamdepartment}</span>
              <p className="w-full">team leader</p>
              <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
                <Image width={30} height={30} alt="team leader " className="w-10 h-10 rounded-full" src={item?.leader?.photo} />
              </div>
              <p className="w-full">team members</p>
              <div className="flex justify-start items-center flex-wrap gap-0 mt-4 -space-x-3 md:my-2 w-full">
                {/* {
                  item?.members.map(items=><p key={items}>pppp</p>)
                } */}
                {
                  item?.members.length > 0 && item?.members.map(item => <Image key={item?._id} width={30} height={30} alt="team member" className="w-10 h-10 rounded-full border-2 border-white" src={item?.photo} />)
                }

                <span onClick={() => document.getElementById(`addmember${item?.teamname}`).showModal()} className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 cursor-pointer">
                  <FaPlus />
                </span>

              </div>
            </div>

          </div>)
        }

      </div>


    </div >
  );
};

export default usePage;