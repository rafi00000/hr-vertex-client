import React from "react";

const RecruitmentCard = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-300 text-white rounded-lg px-6 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-center ml-12">position</h2>

            <button className="text-sm underline">Modal</button>
          </div>

          <div className="mt-4">
            <p className="text-gray-100">Department</p>

            <p className="mt-2 text-gray-100">Responsibilities:</p>

            <p className="mt-2 text-gray-100">Requirements:</p>

            <p className="mt-2 text-gray-100">Application Deadline:</p>
          </div>

          <button className="bg-orange-500 text-white-400 px-4 py-2 rounded mt-4 hover:bg-sky-300">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
