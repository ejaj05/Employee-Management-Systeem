import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const submitHandler = (event)=>{
    event.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-10 md:p-20 rounded-xl'>
        <form  onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
          <input onChange={(e)=>setEmail(e.target.value)} required value={email} className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-zinc-400' type="email" placeholder='Enter your email' />
          <input onChange={(e)=>setPassword(e.target.value)} required value={password} className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full px-5 py-3 text-xl placeholder:text-zzinc-400' type="password" placeholder='Enter your password' />
          <button className='text-white outline-none mt-7 w-full bg-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login