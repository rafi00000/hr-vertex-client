"use client";


import useAxiosSecure from "@/axiosConfig/useAxiosSecure";



const usePage = async () => {

    const axiosSecure = useAxiosSecure();

    const response = await axiosSecure.get('http://localhost:5000/users',);
    const Data = response.data

    console.log(Data)


    return (
        <div>
            <div className='px-6 mt-2'>
                <h1 className="pb-7 font-semibold text-lg">Edit Employee</h1>
                <form

                    className="space-y-4 md:space-y-6  mt-1"
                    action="#"
                >
                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Full Name :
                            </label>
                            <input
                                type="text"
                                name="FullName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="FullName"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Employee Id :
                            </label>
                            <input
                                type="number"
                                name="EmployeeId"
                                placeholder="Employee Id"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email :
                            </label>
                            <input
                                type="email"
                                name="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Joining Date :
                            </label>
                            <input
                                type="date"
                                name="JoiningDate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder=" Joining Date"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label class="block  text-sm font-medium text-gray-900 dark:text-white">  Designation :</label>
                            <select onChange={(e) => SetData(e.target.value)} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                <option selected>Choose one</option>
                                <option >Accounts</option>
                                <option >Marketing</option>
                                <option >Support</option>
                                <option >Manager</option>
                                <option >CEO</option>
                            </select>
                        </div>
                        <div>
                            <label class="block  text-sm font-medium text-gray-900 dark:text-white"> Gender:</label>
                            <select onChange={(e) => SetGender(e.target.value)} id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                <option selected>Choose one</option>
                                <option >Male</option>
                                <option >Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" >
                        <div>
                            <label className="block  text-sm font-medium text-gray-900 dark:text-white">
                                Phone Number :
                            </label>
                            <input
                                type="text"
                                name="PhoneNumber"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Phone Number "
                                required
                            />
                        </div>
                        <div>
                            <label class="block  text-sm font-medium text-gray-900 dark:text-white"> salary :</label>
                            <select onChange={(e) => SetSalary(e.target.value)} class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                                <option selected>Choose one</option>
                                <option >10000</option>
                                <option >20000</option>
                                <option >30000</option>
                                <option >40000</option>
                                <option >50000</option>
                                <option >60000</option>
                                <option >70000</option>
                                <option >80000</option>
                                <option >90000</option>
                                <option >100000</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block  text-sm font-medium text-gray-900 dark:text-white">
                            Address :
                        </label>
                        <input
                            type="text"
                            name="Address"
                            placeholder="Address..."
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                            required
                        />
                    </div>

                    <div>
                        <label className="block  text-sm font-medium text-gray-900 dark:text-white">
                            Photo :
                        </label>
                        <input
                            type="file"
                            name="photo"
                            placeholder="photo..."
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                        {" "}
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default usePage;