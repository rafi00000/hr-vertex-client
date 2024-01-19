import Image from 'next/image'
import React from 'react'
import Button from '@/Components/ClintSideComponents/Button'

const RecruitmentNotice = () => {
    return (
        <div className='bg-black bg-opacity-5 py-24'>
            <h3 className='text-center text-4xl uppercase font-semibold text-teal-500 mb-20'>
                Requirement notice
            </h3>
            <div className='container mx-auto md:grid grid-cols-2 gap-10 items-center text-teal-700'>
                <div>
                    <Image alt='img' src='https://i.ibb.co/jgdsFmH/demand-for-white-collar-talent-up-5-in-june-as-non-tech-hiring-picks-up-1.png' className='w-full' width={2000} height={2000} />
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>
                        Want to start career?
                    </h4>
                    <p className='font-medium  opacity-80 pb-8 pt-2'>
                        Discover the future of talent acquisition. Our cutting-edge HR system transforms the hiring process, from sourcing to onboarding. Elevate efficiency, foster collaboration, and drive success with streamlined workforce strategies.
                    </p>
                    <Button textwidth='font-bold' text='see notice '/>
                </div>
            </div>
        </div>
    )
}

export default RecruitmentNotice
