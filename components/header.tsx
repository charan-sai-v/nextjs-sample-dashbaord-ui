import React from 'react'
import { Input } from './ui/input'
import { CalendarDays, Search } from 'lucide-react'
import Profile from './profile'
import { Card } from './ui/card'

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-white  rounded-md shadow p-2 '>
      <div className='flex items-center justify-start'>
        <div className='flex item-center justify-center p-1.5 bg-[#F8FAFB] w-[400px] rounded-full ml-10'>
          <div className='flex items-center justify-center '>
            <Search className='w-6 h-6 ml-2 text-[#CECECE]' />
          </div>
            <Input placeholder='Search' className='bg-[#F8FAFB] border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0' />
        </div>
      </div>
      <div className='flex justify-center items-center mr-5 space-x-6'>
        <Card className='bg-[#FAFAFA]'>
          <div className='flex items-center justify-center px-2 py-4'>
            <p className='text-lg'>11-10-2022</p>
            <CalendarDays className='w-4 h-4 ml-2 text-[#4543D3]' />
            <p className='ml-5'>OR</p>
            <p className='text-lg ml-5'>11-10-2022</p>
            <CalendarDays className='w-4 h-4 ml-2 text-[#4543D3]' />
          </div>
        </Card>
        <Profile />
      </div>
    </div>
  )
}
