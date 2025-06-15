"use client"
import Image from 'next/image'
import React from 'react'

import SignInButton from './SignInButton'
import { useUserDetailContext } from '@/app/provider'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
  const {userDetail,setUserDetail} =  useUserDetailContext();
  console.log(userDetail?.email)
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
      <Image src={'/logo.svg'} alt="logo" width={180} height={140}/>
      <div>
        {userDetail?.email?
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
          <Button >Dashboard</Button>
          </Link>
          <Image src={userDetail?.picture} alt="user" width={35} height={35} className='rounded-full'/>
        </div> : <SignInButton/>}
      </div>
    </div>
  )
}

export default Header
