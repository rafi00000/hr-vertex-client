"use client";

import useAxiosRequest from "@/axiosConfig/useAxiosRequest";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";

const useReqruitment = () => {
<<<<<<< HEAD
    const axiosSecure = useAxiosSecure()
    // const axiosrequest = useAxiosRequest()
    const HandelSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const position = form.position.value;
        const department = form.department.value;
        const responsibilities = form.responsibilities.value;
        const requirements = form.requirements.value;
        const applicationDeadline = form.applicationDeadline.value;
        const data = {
            position,department,responsibilities,requirements,applicationDeadline
        }
        // console.log(data);
        const res = await axiosSecure.post('/recruitment', data)
        console.log(res.data);
    }
    return (
        <div className="p-5 container  mx-auto my-4  rounded-lg h-screen overflow-y-scroll">
            <h3 className="text-center pt-10 uppercase text-3xl font-bold">RECRUITMENT notice   </h3>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form onSubmit={HandelSubmit} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">position :</label>
                        <input type="text" name="position" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="position..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> department :</label>
                        <textarea type="text" name="department" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="department..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> responsibilities :</label>
                        <textarea type="text" name="responsibilities" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="responsibilities..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> requirements :</label>
                        <input type="text" name="requirements" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="requirements..." required="" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> applicationDeadline :</label>
                        <input type="date" name="applicationDeadline" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="applicationDeadline..." required="" />
                    </div>
                    <button type="submit" className="w-full btn  text-black bg-teal-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">post notice</button>

                </form>

            </div>
        </div>
    )
}

export default useReqruitment
=======
  const axiosSecure = useAxiosSecure();
  // const axiosrequest = useAxiosRequest()
  const HandelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const position = form.position.value;
    const department = form.department.value;
    const responsibilities = form.responsibilities.value;
    const requirements = form.requirements.value;
    const applicationDeadline = form.applicationDeadline.value;
    const data = {
      position,
      department,
      responsibilities,
      requirements,
      applicationDeadline,
    };
    // console.log(data);
    const res = await axiosSecure.post("/recruitment", data);
    console.log(res.data);
  };
  return (
    <div className="p-5 container  mx-auto my-4  rounded-lg h-screen overflow-y-scroll">
      <h3 className="text-center pt-10 uppercase text-3xl font-bold">
        RECRUITMENT notice{" "}
      </h3>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form
          onSubmit={HandelSubmit}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              position :
            </label>
            <input
              type="text"
              name="position"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="position..."
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              department :
            </label>
            <textarea
              type="text"
              name="department"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="department..."
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              responsibilities :
            </label>
            <textarea
              type="text"
              name="responsibilities"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="responsibilities..."
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              requirements :
            </label>
            <input
              type="text"
              name="requirements"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="requirements..."
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {" "}
              applicationDeadline :
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="applicationDeadline..."
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            post notice
          </button>
        </form>
      </div>
    </div>
  );
};

export default useReqruitment;
>>>>>>> 570cc3620635eabf829aceee4348eb4367cb5804
