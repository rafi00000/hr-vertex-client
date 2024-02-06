"use client";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const axioSecure = useAxiosSecure()
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const total = form.total.value;
    const holiday = form.holiday.value;
    const date = form.date.value;
    const data = { total, holiday, date }
    console.log(data)
    axioSecure.post('/holidays', data)
      .then((res) => {
        console.log(res.data)
      })
      router.push('/holiday')
  };

  return (
    <>
      <div className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg ">
        <h4 className="text-3xl py-4 text-center font-semibold">ADD HOLIDAY</h4>
        <form className="space-y-4" onSubmit={handleForm}>
          <div className="form-control w-full">
            <label className="text-md font-semibold">DATE</label>
            <input
              type="date"
              placeholder="DATE"
              className="input input-bordered"
              name="date"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-md font-semibold">HOLIDAY NAME</label>
            <input
              type="text"
              placeholder="HOLIDAY NAME"
              className="input input-bordered"
              name="holiday"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-md font-semibold">TOTAL</label>
            <input
              type="text"
              placeholder="HOLIDAY NAME"
              className="input input-bordered"
              name="total"
            />
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="font-bold btn mt-9  bg-white w-full"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default page
