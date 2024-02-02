import { ArrowLeft } from 'lucide-react'
import React from 'react'
import Profile from '../profile'

export default function StoryHeader() {
  return (
      <div className='flex items-center justify-between  shadow-md rounded-lg py-3  px-2  bg-white '>
      <div className='flex items-center justify-start p-3'>
        <ArrowLeft className='w-4 h-4 mr-3' />
        <h3 className='font-bold text-2xl'>Stories</h3>
      </div>
      <Profile />
    </div>
  )
}
