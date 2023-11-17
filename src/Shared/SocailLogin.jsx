import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocailLogin = () => {
  const {googleSignIn}=useContext(AuthContext)
  const axiosPublic=useAxiosPublic()
  const navigate=useNavigate()
  const handleGoogle=()=>{
    googleSignIn()
    .then(result=>{
      const userInfo={
        email:result?.user?.email ,
        name:result?.user?.displayName
 }
 axiosPublic.post('/users',userInfo)
 .then(res=>{
  console.log(res.data);
  navigate('/')
 })
    })
    .catch(err=>console.log(err))
  }
    return (
     <div className="mx-auto my-10">
       
           <div className="divider "></div>
            <button className="btn" onClick={handleGoogle}>
          <FaGoogle></FaGoogle>
   Google
          </button>
        
        </div>
    );
};

export default SocailLogin;