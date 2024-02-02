import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { ArrowDown, ChevronDown } from 'lucide-react'

export default function Profile() {
  return (
    <Card className='w-[300px]  flex  items-center  p-1.5 '>
      <Image src={'/avatar.png'} width={40} height={40} alt='' className='rounded-lg' />
      <div className='ml-5 w-[203px]'>
        <p>Welcome back,</p>
        <h4 className='text-lg font-medium'>Akshita Patel</h4>
      </div>
      <ChevronDown className='w-6 h-6' />
    </Card>
  )
}
