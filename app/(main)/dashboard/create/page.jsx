import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkle } from 'lucide-react'
import AIInputBox from '@/components/custom/AIInputBox'

const Create = () => {
    
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 mt-20'>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-3xl text-primary'>CREATE NEW EMAIL TEMPLATE</h2>
        <p className='text-lg text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptate.</p>
      
      <Tabs defaultValue="AI" className="w-[500px] mt-10">
  <TabsList>
    <TabsTrigger value="AI">Create with AI <Sparkle className='h-5 w-5 ml-2'/></TabsTrigger>
    <TabsTrigger value="SCRATCH">Start From Scratch</TabsTrigger>
  </TabsList>
  <TabsContent value="AI">
    <AIInputBox/>
  </TabsContent>
  <TabsContent value="SCRATCH">Change your password here.</TabsContent>
</Tabs>
      </div>


    </div>
  )
}

export default Create
