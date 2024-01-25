
import Button from '@/Components/ClintSideComponents/Button';
import Link from 'next/link';

const Banner = () => {

    return (
        <div className='bg-[url("https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png")] w-full px-10'>
            <div className=' relative container mx-auto'>
                <span className=' block md:py-36 py-40 '>
                    <h2 className='lg:text-5xl md:text-3xl text-2xl text-white max-w-[600px] pt-8 '>
                        Human Resource Management System
                    </h2>
                    <p className='text-white max-w-[600px] py-5 opacity-70'>
                        HR Management Systems are essential for businesses aiming to streamline HR processes. These systems automate routine tasks, enhance data accuracy, and facilitate better communication among team members. By leveraging HRMS, organizations can optimize resource allocation, reduce administrative overhead, and empower HR teams to focus on strategic initiatives that drive business success.
                    </p>

            <Link href='/register'>
            <Button text={'SING UP'} />
           </Link>
                </span>
            </div>
        </div>
    )
}

export default Banner
