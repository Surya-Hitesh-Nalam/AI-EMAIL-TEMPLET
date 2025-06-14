'use client'
import { useUserDetailContext } from '@/app/provider'
import EmailTempletList from '@/components/custom/EmailTempletList'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

function Dashboard() {
    const {userDetail,setUserDetail} = useUserDetailContext()
  return (
    <div>
      <Header/>
      <div className='p-10 md:px-20 lg:px-40 xl:px:50 mt-16'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-3xl'>Hello, {userDetail?.name}</h2>
            <Button>+Create New Email Templet</Button>
        </div>
        <EmailTempletList />
      </div>
    </div>
  )
}

export default Dashboard
