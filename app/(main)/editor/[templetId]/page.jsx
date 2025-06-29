"use client"
import { useEmailTempletContext, useUserDetailContext } from '@/app/provider'
import Canvas from '@/components/custom/Canvas'
import EditorHeader from '@/components/custom/EditorHeader'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import Settings from '@/components/custom/Settings'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Editor = () => {
  const [viewHTMLCode,setviewHTMLCode] = useState(false)
  const {templateId} = useParams()
  const {userDetail,setUserDetail} = useUserDetailContext()
  const [loading,setLoading] = useState(false)
  const {emailTemplate,setEmailTemplate} = useEmailTempletContext()
  const convex = useConvex()

  useEffect(()=>{
    if(userDetail){
      GetTemplateData()
    }
  },[userDetail])

  const GetTemplateData=async()=>{
    const result = await convex.query(api.emailTemplate.GetTemplateDesign,{
      tid:templateId,
      email:userDetail?.email
    })
    console.log(result)
    setEmailTemplate(result?.design)
    setLoading(false)
  }
  return (
    <div>
      <EditorHeader viewHTMLCode={(v)=>setviewHTMLCode(v)}/>
      {!loading ?<div className='grid grid-cols-5'>
        <ElementsSideBar/>
        <div className='col-span-3 bg-gray-100'>
            <Canvas viewHTMLCode={viewHTMLCode} closeDialog={()=>setviewHTMLCode(false)}/>
        </div>
        <Settings/>
      </div>:
      <div>
        <h2>Please wait ....</h2>
        </div>
}
    </div>
  )
}

export default Editor
