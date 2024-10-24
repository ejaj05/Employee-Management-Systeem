import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const TaskListNumber = ({data}) => {
  const {taskNumbers} = data;
  return (
    <div className="mt-10 flex justify-between gap-5 flex-wrap">
      {taskNumbers.map((task, idx) => (
        <div className={`w-[45%] px-9 py-6 bg-${task.color}-500 rounded-2xl`}>
          <h1 className="text-3xl font-bold">{task.count}</h1>
          <h1 className="text-2xl font-semibold">{task.type}</h1>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
