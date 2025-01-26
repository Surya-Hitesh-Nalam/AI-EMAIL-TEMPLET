"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'
import { useUserDetailContext } from '@/app/provider'

const Header = () => {
  const {userDetail,setUserDetail} =  useUserDetailContext();
  console.log(userDetail)
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
      <Image src={'/logo.svg'} alt="logo" width={180} height={140}/>
      <div>
        {userDetail?.email?
        <div className='flex gap-3 items-center'>
          <Button>Dashboard</Button>
          <Image src={userDetail?.picture} alt="user" width={40} height={40}/>
        </div> : <SignInButton/>}
      </div>
    </div>
  )
}

export default Header
