"use client"
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";
import { useEffect, useState } from "react";

const AttendancePage = () =>{
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([])
  useEffect(() =>{
    fetch("http://localhost:5000/attendance", {next: {revalidate: 5}})
    .then(res =>res.json())
    .then(data =>{
      setData(data)
    })
  }, [axiosSecure])


  const handleQuery = async(e) =>{
    e.preventDefault();
    setData(null);
    const form = e.target;
    const date = form.date.value;
    const month = form.month.value;
    const name = form.name.value;
    console.log({date, month, name})
    
    // get the data from db
    axiosSecure.get(`/attendance?name=${name}&date=${date && date}&month=${month && month}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }

  console.log(data)

    return (
        <div className="my-10 min-h-screen px-5 space-y-5">
            <p className="text-center text-4xl font-bold">Attendance Report</p>
            <form className="flex justify-between items-center" onSubmit={handleQuery}>
              <div className="flex items-center gap-3">
                <div>
                  <label className="mr-2">Name</label>
                  <input type="text" name="name" className="input input-bordered" />
                </div>
                <div className="flex items-center">
                  <label className="mr-2">date</label>
                  <input type="date" name="date" id="" className="input input-bordered" />
                </div>
                <div>
                <label className="mr-2">Month</label>
                <select name="month" className="input input-bordered">
                  <option></option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              </div>

              {/* submit btn */}
              <div>
                <button className="btn text-white bg-emerald-400 hover:bg-emerald-500">Search</button>
              </div>
            </form>
            <div className="overflow-x-auto bg-white my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Check In</th>
        <th>Check Out</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.map(att => <tr key={att?._id}>
          <td className="font-bold">{att?.name}</td>
          <td>{att?.department}</td>
          <td>
            {att?.clockIn}
          </td>
          <td>{att?.clockOut}</td>
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    )
}

export default AttendancePage;