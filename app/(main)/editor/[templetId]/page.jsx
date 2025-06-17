"use client"
import Canvas from '@/components/custom/Canvas'
import EditorHeader from '@/components/custom/EditorHeader'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import Settings from '@/components/custom/Settings'
import React, { useState } from 'react'

const Editor = () => {
  const [viewHTMLCode,setviewHTMLCode] = useState(false)
  return (
    <div>
      <EditorHeader viewHTMLCode={(v)=>setviewHTMLCode(v)}/>
      <div className='grid grid-cols-5'>
        <ElementsSideBar/>
        <div className='col-span-3 bg-gray-100'>
            <Canvas viewHTMLCode={viewHTMLCode} closeDialog={()=>setviewHTMLCode(false)}/>
        </div>
        <Settings/>
      </div>
    </div>
  )
}

export default Editor
