import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquare, Monitor, Smartphone } from 'lucide-react'

const EditorHeader = () => {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
      <Image src={'/logo.svg'} alt='logo' width={160} height={150}/>
        <div>
            <Button variant="ghost"><Monitor/> Desktop</Button>
            <Button variant="ghost"><Smartphone/> Desktop</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' className="hover:text-primary"><Code/></Button>
            <Button variant='outline'>Send Test Email</Button>
            <Button>Save Templet</Button>
        </div>
    </div>
  )
}

export default EditorHeader
