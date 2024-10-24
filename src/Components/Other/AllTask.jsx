import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  console.log(userData)
  return (
    <div
      id="taskList"
      className="bg-[#1C1C1C] p-5 mt-5 rounded"
    >
      <div className="bg-red-400  py-2 px-4 flex mt-4 justify-between rounded ">
        <h1 className="w-1/5">Employess Name</h1>
        <h1 className="w-1/5 ml-3">New Task</h1>
        <h1 className="w-1/5 ml-3">Active Task</h1>
        <h1 className="w-1/5 ml-3">Completed Task</h1>
        <h1 className="w-1/5 ml-5">Failed Task</h1>
      </div>
      <div>
        {userData.map((employee, idx) => (
          <div key={idx} className="border-2 border-emerald-600  py-2 px-4 flex mt-4 justify-between rounded ">
            <h2 className="w-1/5">{employee.firstName}</h2>
            <h3 className="w-1/5 ml-8 text-blue-600">{employee.taskCount.newTask}</h3>
            <h5 className="w-1/5 ml-8 text-yellow-400">{employee.taskCount.active}</h5>
            <h5 className="w-1/5 ml-8 text-white">{employee.taskCount.completed}</h5>
            <h5 className="w-1/5 ml-8 text-red-600">{employee.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
