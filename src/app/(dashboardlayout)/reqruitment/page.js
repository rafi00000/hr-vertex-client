"use client";

import useAxiosSecure from "@/app/axiosConfig/useAxiosSecure";

const reqruitment = () => {
    const axiosSecure = useAxiosSecure()
    const HandelSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const vacancy = form.vacancy.value;
        const skils = form.skils.value;
        const description = form.description.value;
        const data = {
            title,vacancy,skils,description
        }
        axiosSecure.post('/reqruitment',data)
        .then((res)=>{
            console.log(res.data);
        })
    }
    return (
        <div className="p-5 container  mx-auto my-4  rounded-lg h-screen overflow-y-scroll">
            <h3 className="text-center pt-10 uppercase text-3xl font-bold">RECRUITMENT notice   </h3>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title :</label>
                        <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="title..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> vacancy :</label>
                        <textarea type="number" name="vacancy" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="vacancy..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> skils :</label>
                        <textarea type="text" name="skils" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="skils..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> description :</label>
                        <textarea type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="description..." required="" />
                    </div>
                    <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">post notice</button>

                </form>

            </div>
        </div>
    )
}

export default reqruitment
