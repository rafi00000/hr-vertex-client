'use client';

import { coreContext } from '@/provider/AuthContext';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FaPen } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

const ProfilePage = () => {
  const [edit, setEdit] = useState(true);
  const { user } = useContext(coreContext);

  const handleToggle = () => {
    setEdit(!edit);
  };

  return (
    <div className='my-10'>
            
      <div>
      {/* profile card */}
        <div className='w-1/2 mx-auto'>
          <Image
            width={200}
            height={200}
            src={user?.photoURL}
            alt=''
            className=' mx-auto rounded-full'
          />
          {edit ? (
            <p className='text-right'>
              <button
                className='btn btn-square bg-emerald-400 hover:bg-emerald-500 text-white'
                onClick={handleToggle}
              >
                <FaPen />
              </button>
            </p>
          ) : (
            <p className='text-right'>
              <button
                className='btn btn-square bg-red-400 hover:bg-red-500 text-2xl text-white'
                onClick={handleToggle}
              >
                <FaXmark />
              </button>
            </p>
          )}
        </div>
        <form className=' border p-3 my-4 space-y-3'>
          <div className='form-control'>
            <label>Name</label>
            <input
              type='text'
              className='input input-bordered'
              defaultValue={user?.displayName}
              disabled={edit}
            />
          </div>
          <div className='form-control'>
            <label>Email</label>
            <input
              type='email'
              className='input input-bordered'
              defaultValue={user?.email}
              disabled
            />
          </div>
          <div className='form-control'>
            <label>photoURL</label>
            <input
              type='text'
              className='input input-bordered'
              defaultValue={user?.photoURL}
              disabled={edit}
            />
          </div>
        </form>
      </div>
      {/*  */}
      <div>
        <h2>Leaves</h2>
        <p>{21}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
