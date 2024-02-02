import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';

const contents = [
  {
    id: 1,
    img: "/ad_684.png",
    title: "Build your business",
    description: "Shopify has all the tools you need to start, sell, market, and manage.",
  },
  {
    id: 2,
    img: "/ad_685.png",
    title: "Libre Coffee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    img: "/ad_686.png",
    title: "KFC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },

];

export default function AdCards() {
  return (
    <div className='flex items-center justify-center space-x-3 mb-10'>
      {contents.map((content) => (
        <Card className='w-fit' key={content.id}>
          <div className='flex flex-row'>
            <Image src={content.img} width={140} height={212} alt='' />
            <div className='p-3 flex flex-col'>
              <h3 className='text-xl font-semibold'>{content.title}</h3>
              <p className='mt-1 text-sm'>{content.description}</p>
              <div className='flex space-x-2 mt-1'>
                <Button variant={'secondary'} className='w-full'>
                  View
                </Button>
                <Button className='bg-[#FAFAFA]'>
                  <MoreHorizontal />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
