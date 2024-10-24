import React, { useContext, useEffect, useState } from "react";

const CreateTask = ({handleSubmit}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const addTask = (event)=>{
    event.preventDefault();
    const data = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      completed: false,
      newTask: true,
      failed: false,
      color:color[Math.floor(Math.random()*6)]
    }
    handleSubmit(data,assignTo)
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  }
  const color = ["orange", "purple", "blue", "violet","lime","teal"]
  return (
    <div className="bg-[#1c1c1c] p-5 mt-8">
      <form
        onSubmit={addTask}
        className="w-full bg- flex items-start justify-between"
      >
        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <h3 className="mb-0.5">Task Title</h3>
            <input required
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-[70%] bg-transparent border border-zinc-500 rounded px-3 py-1 outline-none placeholder:text-sm"
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
            />
          </div>
          <div>
            <h3 className="mb-0.5">Date</h3>
            <input 
              required
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-[70%] bg-transparent border border-zinc-500 rounded px-3 py-1 outline-none placeholder:text-sm"
              type="date"
              value={taskDate}
            />
          </div>
          <div>
            <h3 className="mb-0.5">Asign to</h3>
            <input
              required
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-[70%] bg-transparent border border-zinc-500 rounded px-3 py-1 outline-none placeholder:text-sm"
              type="text"
              placeholder="employee name"
              value={assignTo}
            />
          </div>
          <div>
            <h3 className="mb-0.5">Category</h3>
            <input
              required
              onChange={(e) => setCategory(e.target.value)}
              className="w-[70%] bg-transparent border border-zinc-500 rounded px-3 py-1 outline-none placeholder:text-sm"
              type="text"
              value={category}
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-2/5 flex flex-col">
          <h3>Description</h3>
          <textarea
            required
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-[100%] h-48 bg-transparent border-2 border-zinc-500 rounded px-3 py-1 outline-none placeholder:text-sm"
            rows={8}
            value={taskDescription}
          ></textarea>
          <button className="text-white outline-none w-full mt-5 bg-emerald-500 hover:bg-emerald-600 rounded px-5 py-2 text-xl placeholder:text-white">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
