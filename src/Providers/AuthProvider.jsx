import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase_config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {

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
    setLoading(false)
 })
return ()=>{
    unsubscribe()
 }
  },[])

    const authInfo={user,loading,createUser,signIn,logout,googleSignIn}
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;