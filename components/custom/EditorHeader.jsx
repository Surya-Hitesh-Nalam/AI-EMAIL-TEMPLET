'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquare, Monitor, Smartphone } from 'lucide-react'
import { useEmailTempletContext, useScreenSizeContext } from '@/app/provider'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'

const EditorHeader = ({viewHTMLCode}) => {
  const {screenSize,setScreenSize} = useScreenSizeContext()
  const updateEmailTemplate = useMutation(api.emailTemplate.UpdateTemplateDesign)
  const {templateId} = useParams();
  const {emailTemplate,setEmailTemplate}=useEmailTempletContext();

  const onSaveTemplate = async() =>{
    await updateEmailTemplate({
        tid:templateId,
        design:emailTemplate
    })

    toast('Email Template Saved Successfully !')
  }

  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
      <Image src={'/logo.svg'} alt='logo' width={160} height={150}/>
        <div className='flex gap-3'>
            <Button onClick={()=>setScreenSize('desktop')} variant="ghost" className={`${screenSize=='desktop'&&'bg-purple-100 text-primary'}`}><Monitor/> Desktop</Button>
            <Button onClick={()=>setScreenSize('mobile')} variant="ghost"  className={`${screenSize=='mobile'&&'bg-purple-100 text-primary'}`}><Smartphone/> Desktop</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' className="hover:text-primary" onClick={()=>viewHTMLCode(true)}><Code/></Button>
            <Button variant='outline'>Send Test Email</Button>
            <Button onClick={onSaveTemplate}>Save Templet</Button>
        </div>
    </div>
  )
}

export default EditorHeader
