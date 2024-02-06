import Image from "next/image";


const AttendancePage = () =>{

    return (
        <div className="my-10 min-h-screen px-5">
            <p className="text-center text-4xl font-bold">Attendance Report</p>
            <div className="overflow-x-auto bg-white my-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Check In</th>
        <th>Check Out</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td className="font-bold">Rafiul Islam</td>
        <td>rafiul@somthing.org</td>
        <td>
          05/02/2024 8:00 AM
        </td>
        <td>05/02/2024 5:00 PM</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    )
}

export default AttendancePage;