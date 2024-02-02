import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { FileText, LayoutDashboard, Library, Megaphone } from 'lucide-react';

const routes = [
  {
    id: 1,
    headline: "Articles",
    icon: FileText,
    description: "4,950 New Updates"
  },
  {
    id: 2,
    headline: "Categories",
    icon: LayoutDashboard,
    description: "4,950 New Updates"
  },
  {
    id: 3,
    headline: "Stories",
    icon: Library,
    description: "4,950 New Updates"
  },
  {
    id: 4,
    headline: "Advertisements",
    icon: Megaphone,
    description: "4,950 New Updates",
    
    
    
  }
];

export default function HeadCards() {
  return (
    <div className='flex gap-8 mb-8'>
      {routes.map((route) => (
        <Card key={route.id} className='w-fit '>
          {/* <CardContent> */}
            <div className='p-5'>
              <div className='flex space-x-4'>
                <div className='rounded-full bg-[#E8E9FF] p-3'>
                  <route.icon className='text-[#7750F1]' />
                </div>
                <div className=''>
                  <p className='text-lg font-semibold'>
                    {route.headline}
                  </p>
                  <p>
                    {route.description}
                  </p>
                </div>
              </div>

            </div>
          {/* </CardContent> */}
        </Card>
      ))}
    </div>
  )
}
