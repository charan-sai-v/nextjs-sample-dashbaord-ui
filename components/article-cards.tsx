import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';


const articles = [
  {
    id: 1,
    img: "/Article_684.png",
    category: "BUSINESS",
    published_date: "20 Sep 2022",
    author_profile: "",
    author_name: "Maria Doe",
    title: "7 Rules of Effective Branding",
    status: "Created",
    description: "Why Branding matters for your Business",
    tags: [
      "Branding",
      "Communications",
    ],
  },
  {
    id: 2,
    img: "/Article_685.png",
    category: "ECONOMY",
    published_date: "20 Sep 2022",
    author_profile: "",
    author_name: "Maria Doe",
    title: "Research on biodiversity an..",
    status: "Published",
    description: "Lorem ipsum dolor sit amet, consectetur",
    tags: [
      "World",
      "Population",
    ],
  },
  {
    id: 3,
    img: "/Article_686.png",
    category: "POLITICS",
    published_date: "20 Sep 2022",
    author_profile: "",
    author_name: "Maria Doe",
    title: "Close and historical ties ...",
    status: "Published",
    description: "Lorem ipsum dolor sit amet, consectetur",
    tags: [
      "Politics",
      "Defence",
    ],
  }
];

export default function ArticleCards() {
  return (
    <div className='flex space-x-4 mb-8'>
      {articles.map((article) => (
        <Card className='w-fit' key={article.id}>
          <div className='p-3'>
            <div className='mb-2'>
              <Image className='rounded-xl' width={400} height={200} src={article.img} alt='' />
            </div>
            <div className='flex items-center justify-between mb-3'>
              <div className='flex items-center justify-center space-x-2'>
                <p className='text-[#9058FF] capitalize text-sm font-bold'>
                  {article.category}
                </p>
                <div className='ml-1'>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
                  </svg>
                </div>
                <div>
                  <p className='text-muted-foreground'>
                    {article.published_date}
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <Image src={"/User.png"} alt='' width={30} height={30}  />
                <p>{article.author_name}</p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-xl font-semibold '>
                  {article.title}
                </h3>
              </div>
              <div>
              {article.status === 'Created' && (<Button className='bg-[#DAF1FB] text-[#58A4FF] hover:bg-[#DAF1FB]'>{article.status}</Button>) }
                      {article.status === 'Published' && (<Button className='bg-[#E4FFF8] text-[#0DAD82] hover:bg-[#E4FFF8]'>{article.status}</Button>) }
                      {article.status === 'Draft' && (<Button className='bg-[#F4F4F4] text-[#A0A3BD] hover:bg-[#F4F4F4s]'>{article.status}</Button>) }
              </div>
            </div>
            <span className='text-muted-foreground'>
              {article.description}
            </span>
            <div className='flex space-x-2 my-3'>
              {article.tags.map((item, index) => (
                <div className='px-2 py-1.5 bg-[#F8FAFB] rounded-lg' key={index}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className='flex space-x-2'>
                <Button variant={'secondary'} className='w-full'>View</Button>
              
                <Button className='bg-[#FAFAFA]' ><MoreHorizontal /></Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
