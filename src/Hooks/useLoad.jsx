import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";



const useLoad = () => {
     const axiosPublic=useAxiosPublic()
   
    const {data:menu=[],refetch,isPending}=useQuery({

        queryKey:['menu'],
        queryFn:async()=>{
         const res=await   axiosPublic.get('/menu')
           return res.data

        }
    })
    return [menu,isPending,refetch]
};

export default useLoad;