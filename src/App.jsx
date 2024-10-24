import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorage } from './utils/LocalStorage'
const App = () => {
  const[user,setUser] = useState(null)
  const[loggedInUserData,setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  const handleClick = () => {
    localStorage.removeItem('loggedIn');
    setUser(null)
  }
  console.log(userData)
  const handleLogin = (email,password)=>{
    if(email === 'admin@me.com' && password == '123'){
      const {admin} = getLocalStorage()
      localStorage.setItem('loggedIn', JSON.stringify({role:"admin",data:null}))
      setUser('admin')
      setLoggedInUserData(admin)
    }else if(userData){
      const employee = userData.find((e)=>e.email == email && e.password == password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedIn', JSON.stringify({role:"employee",data:employee}))
      }
      else{
        alert('Invalid credentials')
      }
    }else{
      alert('Invalid credentials')
    }
  }
  useEffect(()=>{
    const loggedIn = localStorage.getItem('loggedIn')
    if(loggedIn){
      const userData = JSON.parse(localStorage.getItem('loggedIn'))
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[userData]);
  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>}
      {user == 'admin' && <AdminDashboard data={loggedInUserData} handleClick={handleClick}/>}
      {user == 'employee' && <EmployeeDashboard data={loggedInUserData} handleClick={handleClick}/>}
      <ToastContainer/>
    </>
  )
}

export default App