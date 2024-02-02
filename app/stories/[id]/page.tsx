"use client";
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import StoryHeader from '@/components/ui/story-header'
import { ChevronDown, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export default function StoryPage({ params }: { params: { id: string } }) {
  return (
    <>
      <StoryHeader />
      <div className='mt-10 pl-10'>
        <div className='flex items-center justify-between px-3'>
          <div className='flex item-center justify-start space-x-3'>
            <Image src={'/User_1.png'} width={40} height={40} alt='' />
            <div className='flex items-center justify-center'>
            <p className='text-[#A0A3BD] font-semibold'>James Robert</p>
            </div>
            <div className='flex items-center justify-center'>
            <p className='text-[#58A4FF] '>Created on 13 January 2022</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant={'ghost'} className='bg-[#FAFAFA]'>Accessibility <ChevronDown className='w-4 h-4 ml-1' /></Button>
            <Button className='bg-[#FAFAFA]'>
              <MoreHorizontal />
            </Button>
          </div>
        </div>
        <div className='mt-10 px-10 mx-auto'>
          <Carousel className="w-fit max-w-lg mx-auto ">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 ">
                    <Image src={'/Story_1.png'} width={561} height={812} alt='' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  )
}
