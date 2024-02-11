"use client";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { coreContext } from "@/provider/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
const AddLoan = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const axioSecure = useAxiosSecure()
  const {user}=useContext(coreContext)
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = form.amount.value;
    const reason = form.reason.value;
    const date = form.date.value;
    const data = { reason, amount, date, user : user?._id}
    console.log(data)
    axioSecure.post('/loan', data)
      .then((res) => {
        console.log(res.data)
      })
      router.push('/allloanrequest')
  };

  return (
    <>
      <div className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg ">
        <h4 className="text-3xl py-4 text-center font-semibold"> LOAN REQUEST </h4>
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
            <label className="text-md font-semibold">REASON FOR LOAN</label>
            <input
              type="text"
              placeholder="REASON FOR LOAN"
              className="input input-bordered"
              name="reason"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-md font-semibold">AMOUNT</label>
            <input
              type="text"
              placeholder="AMOUNT"
              className="input input-bordered"
              name="amount"
            />
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="font-bold btn mt-9  bg-white w-full"
            >
              REQUEST
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddLoan
