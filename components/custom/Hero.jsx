import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col justify-center items-center mt-24'>
      <h2 className='font-extrabold text-5xl '>AI POWERED EMIAL TEMPLETS</h2>
        <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto quae sequi. Suscipit at ratione itaque dignissimos vel minima commodi beatae quos quam? Hic sunt quidem nam deleniti architecto magni!</p>
        <div className='flex gap-5 mt-6'>
            <Button variant="outline">Try Demo</Button>
            <Button>Get Started</Button>
        </div>
        <Image src={'/landing.png'} alt="landing" width={1000} height={800} className='mt-12 rounded-xl'/>
    </div>
  )
}

export default Hero
