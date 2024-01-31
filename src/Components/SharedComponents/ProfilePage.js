"use client"

import { coreContext } from "@/provider/AuthContext";
import { useContext, useState } from "react";
import { FaPen } from "react-icons/fa6";
import Button from "../ClintSideComponents/Button";


const ProfilePage = () => {
    const [edit, setEdit] = useState(true);
    const {user} = useContext(coreContext);

    const handleToggle = () =>{
        setEdit(!edit);
    }

    return (
        <div className="my-10">
            <p className="font-semibold pl-3">Profile Page</p>
            <div className="w-1/2 mx-auto">
                <img src={user?.photoURL} alt="" className="w-1/4 mx-auto rounded-full" />
                <p className="text-right"><button className="btn btn-square bg-emerald-400 hover:bg-emerald-500 text-white" onClick={handleToggle}><FaPen /></button></p>
            </div>
            <form className=' border p-3 my-4 space-y-3'>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" className='input input-bordered' defaultValue={user?.displayName} disabled={edit} />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" className='input input-bordered' defaultValue={user?.email} disabled={edit} />  
                </div>
                <div className="form-control">
                    <label>photoURL</label>
                    <input type="text" className="input input-bordered" defaultValue={user?.photoURL} disabled={edit} />
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;