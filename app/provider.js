"use client"
import { UserDetailContext } from "@/context/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { useContext, useEffect, useState } from 'react'

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [userDetail,setUserDetail] = useState()
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('userDetails');
        try {
          if (storedData) {
            const storage = JSON.parse(storedData);
            if (!storage?.email) {
              // Redirect to Home Screen
            } else {
              setUserDetail(storage);
            }
          }
        } catch (error) {
          console.error("Invalid JSON in localStorage:", error);
          localStorage.removeItem('userDetails');  // Clear invalid data
        }
      }
    }, []);
    
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{}}>
    <div>
      {children}
    </div>
    </UserDetailContext.Provider>
    </GoogleOAuthProvider>
    </ConvexProvider>
    
  )
}

export default Provider

export const useUserDetailContext = ()=>{
  return useContext(UserDetailContext);
}
