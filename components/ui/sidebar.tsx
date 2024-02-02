"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

import {cn} from "@/lib/utils";
import {Bell, ComputerIcon, File, Home, LineChart, Settings, User, UserSquare2, Users2, VideoIcon} from "lucide-react";


const routes = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/",
        color: "text-sky-500"
    },
    {
        label: "Content",
        icon: File,
        href: "/",
        color: "text-violet-500"
    },
    {
        label: "Team",
        icon: Users2,
        href: "/",
        color: "text-violet-500"
    },
    {
        label: "User",
        icon: UserSquare2,
        href: "/",
        color: "text-pink-500"
    },
    {
        label: "App/Web",
        icon: ComputerIcon,
        href: "/",
        color: "text-orange-700"
    },
    {
        label: "Analytics",
        icon: LineChart,
        href: "/",
        color: "text-emerald-500"
    },
    {
        label: "Media",
        icon: VideoIcon,
        href: "/",
        color: "text-gren-700"
    },
    {
      label: "Notification",
      icon: Bell,
      href: "/",
      color: "text-gren-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/",
    },

]



const Sidebar = () => {
    const pathName = usePathname()
    return (
        <div className="space-y-4 py-4 flex flex-col h-full text-black bg-white">
            <div className="px-3 py-2 flex-1">
                <div className="relative h-8 w-8 mr-4">
                  {/* <Image fill alt="Logo" src="/logo.png" /> */}
                </div>
                <div className='space-y-1'>
                    {routes.map((route)=> (
                        <Link className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  rounded-lg transition", pathName === route.href ? "text-black bg-white/10": "text-black" )} href={route.href} key={route.href}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;