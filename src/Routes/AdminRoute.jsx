
import { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [data,isPending]=useAdmin()
   
        if(loading || isPending){
            return <> 
          <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
               <span className="loading loading-spinner loading-lg text-error"></span>
            </div></>
           
       
        }
        if(user && data){
            return children
        }
        return (
            <Navigate to='/' state={location.pathname} replace></Navigate>
        );
   
};

export default AdminRoute;