import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const AuthProvider = (props) => {
    const [userData,setUserData] = useState(null)
    useEffect(()=>{
        if(localStorage.getItem("employees") === null){
            setLocalStorage()
        }
        const {employees} = getLocalStorage()
        setUserData(employees)
    },[])
  return <AuthContext.Provider value={[userData,setUserData]}>
            {props.children}
    </AuthContext.Provider>;
};

export default AuthProvider;
