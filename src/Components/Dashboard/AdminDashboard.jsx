import React, { useContext } from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";
import { AuthContext } from "../../Context/AuthProvider";

const AdminDashboard = ({handleClick}) => {
  const [userData, setUserData] = useContext(AuthContext);
  const handleSubmit = (data,assignTo) => {
    const newData = userData.map((elem,idx)=>{
      if(elem.firstName == assignTo){
        elem.taskCount.newTask++;
        elem.taskNumbers[1].count++;
        return {...elem, tasks:[...elem.tasks, data]}
      }else{
        return elem;
      }
    })
    setUserData([...newData])
    localStorage.setItem("employees",JSON.stringify([...newData]))
  };
  return (
    <div className="h-screen w-full p-5 md:p-10">
      <Header handleClick={handleClick}/>
      <CreateTask handleSubmit={handleSubmit}/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
