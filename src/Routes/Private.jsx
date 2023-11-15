

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
                return <> 
              <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
                   <span className="loading loading-spinner loading-lg text-error"></span>
                </div></>
               
           
            }
            if(user){
                return children
            }
            return (
                <Navigate to='/login' state={location.pathname} replace></Navigate>
            );
       
};


export default Private;