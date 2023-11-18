import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data,isPending} =useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.isAdmin
        }
    })
    return [data]
};

export default useAdmin;