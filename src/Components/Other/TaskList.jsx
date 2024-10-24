import React from "react";

const TaskList = ({ data }) => {
  const { tasks } = data;
  return (
    <div
      id="taskList"
      className="mt-10 py-5 h-[300px] flex items-center justify-start gap-5 flex-nowrap w-full overflow-x-auto "
    >
      {tasks.map((task, idx) => (
        <div className={`shrink-0 bg-${task.color}-400 h-full w-[300px] rounded-xl p-5`}>
          <div className="flex justify-between items-center">
            <h1 className={`bg-red-600 text-sm px-3 py-1 rounded`}>{task.category}</h1>
            <h4 className="text-sm">{task.taskDate}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
          <p className="text-sm mt-2">
            {task.taskDescription}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
