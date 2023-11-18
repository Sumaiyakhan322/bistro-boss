import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase_config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext=createContext(null)

const auth=getAuth(app)


const AuthProvider = ({children}) => {
  const axiosPublic=useAxiosPublic()
  const provider = new GoogleAuthProvider();

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true)

 const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const googleSignIn=()=>{
  setLoading(true);
  return signInWithPopup(auth,provider)

 }
 const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
const logout=()=>{
    setLoading(true)
    return signOut(auth)
}
  useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    if(currentUser){
        //get token and store the token
        const userInfo={email:currentUser?.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
        })
    }
    else{
       //rempve token
       localStorage.removeItem('access-token')
    }
    setLoading(false)
 })
return ()=>{
    unsubscribe()
 }
  },[axiosPublic])

    const authInfo={user,loading,createUser,signIn,logout,googleSignIn}
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;