import React from 'react';
import { BarChart4, Eye, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const contents = [
  {
    id: 1,
    img: "/Story_684.png",
    view_count: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    published_date: "20 Sep 2022",
    status: "Published",
  },
  {
    id: 2,
    img: "/Story_685.png",
    view_count: 428,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    published_date: "20 Sep 2022",
    status: "Created",
  },
  {
    id: 3,
    img: "/Story_686.png",
    view_count: 428,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    published_date: "20 Sep 2022",
    status: "Draft",
  },
  {
    id: 4,
    img: "/Story_687.png",
    view_count: 428,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    published_date: "20 Sep 2022",
    status: "Published",
  },

  
  
];

export default function StoryCards() {
  return (
    <div className='flex flex-row gap-4  w-max mb-8 bg-[#F8FAFB]'>
      {contents.map((content) => (
        <Link key={content.id} href={'/stories/1'}>
          <div key={content.id} className='w-[340px] h-[500px] relative'>
            <Image src={content.img} alt='Story Image' layout='fill' objectFit='cover' />
            <div className='absolute inset-0 p-3 flex flex-col  text-white'>
              <div>
              <div className='flex justify-end gap-2 text-[#9058FF]'>
                <div className='p-2 bg-[#FFFFFFCC] flex items-center justify-center rounded-lg'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Eye size={16} strokeWidth={2.75} />
                    <p className='text-sm'>{content.view_count}</p>
                  </div>
                </div>
                <div className='p-2 bg-[#FFFFFFCC] flex items-center justify-center rounded-lg'>
                  <BarChart4 className='w-4 h-4' />
                </div>
              </div>
              </div>
              <div className='absolute inset-0 p-3 flex flex-col justify-end'>
              <div className='flex flex-col'>
                <div>
                  <h3 className='mb-3 text-2xl font-medium'>{content.title}</h3>
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center space-x-2'>
                      <p className='text-[#9058FF] capitalize text-sm font-bold'>{content.category}</p>
                      <div>
                        <svg width='5' height='5' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <circle cx='2.5' cy='2.5' r='2.5' fill='#D9D9D9' />
                        </svg>
                      </div>
                      <p className='text-[#A0A3BD] font-semibold'>{content.published_date}</p>
                    </div>
                    <div className='flex items-center justify pointer-events-none'>
                        {content.status === 'Created' && (<Button className='bg-[#DAF1FB] text-[#58A4FF] hover:bg-[#DAF1FB]'>{content.status}</Button>) }
                        {content.status === 'Published' && (<Button className='bg-[#E4FFF8] text-[#0DAD82] hover:bg-[#E4FFF8]'>{content.status}</Button>) }
                        {content.status === 'Draft' && (<Button className='bg-[#F4F4F4] text-[#A0A3BD] hover:bg-[#F4F4F4s]'>{content.status}</Button>) }
                        
                      </div>
                  </div>
                </div>
                <div className='flex space-x-2'>
                  <Button  variant={'secondary'} className='w-full'>
                    View
                  </Button>
                  <Button className='bg-[#FAFAFA]'>
                    <MoreHorizontal />
                  </Button>
                </div>
              </div>
              </div>
            
            </div>
          </div>
        </Link>
      ))}
    </div>
    
  );
}
