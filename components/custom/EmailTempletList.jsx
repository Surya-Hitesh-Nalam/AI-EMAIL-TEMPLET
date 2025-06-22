import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { useConvex } from 'convex/react';
import { useUserDetailContext } from '@/app/provider';
import { api } from '@/convex/_generated/api';

const EmailTempletList = () => {
    const [emailList, setEmailList] = useState([]);
    const convex = useConvex();
    const {userDetail,setUserDetail} = useUserDetailContext();

    useEffect(()=>{
      userDetail&&GetTemplateList()
    },[userDetail])
    const GetTemplateList =async ()=>{
      const res= await convex.query(api.emailTemplate.GetAllUserTemplate,{
        email:userDetail?.email
      })
      console.log(res)
      setEmailList(res);
    }

  return (
    <div >
        <h2 className='font bold-xl text-primary mt-6'>Workspace</h2>
        {emailList?.length==0?
        <div className='flex justify-center mt-7 flex-col items-center'>
            <Image src={'/email.png'} alt='email' height={250} width={250} />
            <Link href={'/dashboard/create'}>
            <Button className="mt-7">+ Create New</Button>
            </Link>
        </div>   
        : 
        <div className='grid grid-cols-2 md:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5'>
          {emailList?.map((item,index)=>(
            <div key={index} className='p-5 rounded-lg shadow-md border'>
              <Image src={'/emailbox.png'} alt="email" width={200} height={200} className='w-full'/>
        
                <h2 className='mt-2'>{item?.description}</h2>
                <Link href={'/editor/'+item?.tid}>
                <Button className="mt-2">View/Edit</Button>
                </Link>  
              </div>
            
          ))}
        </div>
        }
    </div>
  )
}

export default EmailTempletList
