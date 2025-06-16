'use client'
import { useDragLayoutElementContext, useEmailTempletContext, useScreenSizeContext } from '@/app/provider'
import Layout from '@/data/Layout'
import React, { useEffect, useRef, useState } from 'react'
import ColumnLayout from '../LayoutElements/ColumnLayout'

const Canvas = ({viewHTMLCode}) => {
  const htmlRef = useRef();
  const {screenSize,setScreenSize} = useScreenSizeContext()
  const {dragElementLayout,setDragElementLayout}=useDragLayoutElementContext()
  const {emailTemplet,setEmailTemplet} = useEmailTempletContext()
  const [dragOver,setDragOver] = useState(false)
  const [htmlCode , setHTMLCode] = useState()
  const onDragOver = (e)=>{
    e.preventDefault()
    setDragOver(true)
  }
  const onDropHandle=()=>{
    setDragOver(false)
    if(dragElementLayout?.dragLayout){
      setEmailTemplet(prev=>[...prev,dragElementLayout?.dragLayout])
    }
  }
  const getLayoutComponent = (layout)=>{
    if(layout?.type=='column'){
      return <ColumnLayout layout={layout}/>
    }
  }

  useEffect(()=>{
    viewHTMLCode&&GetHTMLCode()
  },[viewHTMLCode])

  const GetHTMLCode = ()=>{
    if(htmlRef.current){
      const htmlContent = htmlRef.current.innerHTML;
      console.log(htmlContent)
      setHTMLCode(htmlContent)
    }
  }
  return (
    <div className='mt-20 flex justify-center'>
      <div className={`bg-white p-6 w-full ${screenSize=='desktop'?'max-w-2xl':'max-w-md'} ${dragOver&& 'bg-purple-200 p-4'}`}
      onDragOver={onDragOver} onDrop={()=>onDropHandle()} ref={htmlRef}>
        {emailTemplet?.length>0 ? emailTemplet?.map((layout,index)=>(
          <div key={index}>
            {getLayoutComponent(layout)}
          </div>
        )):<h2 className='p-4 text-center bg-gray-100 border-dashed'>Add Layout Here</h2>}
      </div>
    </div>
  )
}

export default Canvas
