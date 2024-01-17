import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div className='z-10 border-t text-teal-500'>
      <div className='container mx-auto flex justify-between items-center py-2'>
        <span className='font-bold text-4xl '>
          vertex
        </span>
        <span className='uppercase flex justify-center items-center gap-2'>
          <Link className='hover:scale-105 active:scale-95' href='/'>
            home
          </Link>
          <Link className='hover:scale-105 active:scale-95' href='/about'>
            about
          </Link>
          <Link className='hover:scale-105 active:scale-95' href='/contact'>
            contact
          </Link>
        </span>
        <button className='bg-teal-300 text-gray-700 hover:scale-105 active:scale-95 transition-all px-8 py-2 uppercase rounded-sm font-semibold'>
          sign in
        </button>
      </div>
    </div>
  )
}

export default Navber
