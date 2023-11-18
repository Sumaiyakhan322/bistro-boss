import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

 const axiosSecure=axios.create(
    {
        baseURL:'http://localhost:5000'
    }
)

const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {logout}=useContext(AuthContext)
    //interceptor request for authorization
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        // console.log('interceptor stopped ',token);
        config.headers.authorization=`Bearer ${token}`
       return config
    } ,function(error){
        return Promise.reject(error)
    })

    //interceptor for 401 and 403 for respone
    axiosSecure.interceptors.response.use(function(res){
        return res
    },async function(error){
        const status=error.response.status
        if(status===401 || status===403){
            await logout()
          navigate('/login')
        }
        // console.log('error in the interceptor',error);
         return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;