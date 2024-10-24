import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = ({data,handleClick}) => {
  return (
    <div className='bg-[#1C1C1C] w-screen p-10 h-screen'>
        <Header data={data} handleClick={handleClick}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard