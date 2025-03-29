"use client"
import { DragDropLayoutElement } from "@/context/DragDropLayoutElement";
import { EmailTempletContext } from "@/context/EmailTempletContext";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { SelectedElementContext } from "@/context/SelectedElementContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { useContext, useEffect, useState } from 'react'

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    const [userDetail,setUserDetail] = useState()
    const [screenSize,setScreenSize] = useState('desktop')
    const [dragElementLayout,setDragElementLayout] = useState()
    const [emailTemplet,setEmailTemplet] = useState([])
    const [selectedElement, setSelectedElement] = useState()

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('userDetail');
        const emailTempletStorage = JSON.parse(localStorage.getItem('emailTemplet'));
        setEmailTemplet(emailTempletStorage ?? [])
        if(!storage?.email || !storage){

        }else{
          setUserDetail(storage);
        }
        console.log(storedData)
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

    useEffect(()=>{
      if(selectedElement){
        let updatedEmailTemplates=[]
        emailTemplet.forEach((item,index)=>{
          if(item.id===selectedElement?.layout?.id){
            updatedEmailTemplates?.push(selectedElement?.layout)
        }
      else{
        updatedEmailTemplates(item)
      }})
      setEmailTemplet(updatedEmailTemplates)
      }
    },[selectedElement])
    
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
          <ScreenSizeContext.Provider values={{screenSize,setScreenSize}}>
            <DragDropLayoutElement.Provider value={{dragElementLayout,setDragElementLayout}}>
              <EmailTempletContext.Provider value={{emailTemplet,setEmailTemplet}}>
                <SelectedElementContext.Provider value={{selectedElement, setSelectedElement}}>
    <div>
      {children}
    </div>
    </SelectedElementContext.Provider>
    </EmailTempletContext.Provider>
    </DragDropLayoutElement.Provider>
    </ScreenSizeContext.Provider>
    </UserDetailContext.Provider>
    </GoogleOAuthProvider>
    </ConvexProvider>
    
  )
}

export default Provider

export const useUserDetailContext = ()=>{
  return useContext(UserDetailContext);
}

export const useScreenSizeContext = ()=>{
  return useContext(ScreenSizeContext);
}

export const useDragLayoutElementContext = ()=>{
  return useContext(DragDropLayoutElement);
}
export const useEmailTempletContext = ()=>{
  return useContext(EmailTempletContext);
}

export const useSelectedElementContext = ()=>{
  return useContext(SelectedElementContext);
}