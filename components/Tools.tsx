'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";
import { Star, Bell, Settings, Users, MessageSquare, CheckCircle, Calendar, Shield } from "lucide-react";
import Service from "./service";
interface Data{
    icon:ReactNode;
    title:string;
    desc:string;
    newF?:boolean;
}
const Tools = () => {
    const [showAll,setShowAll] = useState<boolean>(false)
    const changeShow =()=> setShowAll(prev=>!prev)
    const mockData: Data[] = [
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><Star className="w-6 h-6 text-yellow-500" /></div>,
    title: "Featured",
    desc: "Highlight your best projects and achievements here.",
    newF: true,
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><Bell className="w-6 h-6 text-blue-600" /></div>,
    title: "Notifications",
    desc: "Stay updated with real-time alerts and activity logs.",
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><Settings className="w-6 h-6 text-gray-600" /></div>,
    title: "Settings",
    desc: "Customize your experience and manage preferences.",
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><Users className="w-6 h-6 text-green-600" /></div>,
    title: "Team Management",
    desc: "Add, remove, and organize your teammates easily.",
    newF: true,
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><MessageSquare className="w-6 h-6 text-purple-500" /></div>,
    title: "Messaging",
    desc: "Collaborate with your team using real-time chat.",
    newF: true,
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><CheckCircle className="w-6 h-6 text-emerald-500" /></div>,
    title: "Tasks",
    desc: "Track your progress and manage your to-dos.",
    newF: true,
  },
  {
    icon: <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 "><Calendar className="w-6 h-6 text-pink-500" /></div>,
    title: "Events",
    desc: "Plan and view upcoming events with reminders.",
    newF: true,
  },
  {
    icon:    <div className="w-[40px] flex items-center justify-center h-[40px] rounded-md text-center bg-gradient-to-br from-blue-600 to-blue-400 ">
            <Shield className="w-6 h-6 text-red-500" />
            </div>,
    title: "Security",
    desc: "Manage account safety and privacy settings.",
  },
];
    return ( 
        <div className="w-full space-y-3 ">
            <div className="w-full p-3 flex items-center justify-between gap-3 ">
                <p className="font-semibold text-xl">Generate</p>
                <div className="text-blue-500  ">
                    {showAll?(
                        <div onClick={changeShow} className=" cursor-pointer text-sm flex items-center justify-center gap-1 ">
                            <ChevronUp size={16} />
                            <p className="">Close all</p>
                        </div>
                    ):(
                        <div onClick={changeShow} className=" cursor-pointer text-sm flex items-center justify-center gap-1">
                            <ChevronDown />
                            <p className="">Show all</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="p-3 grid items-start justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {mockData.map((item,index)=>(
                    <Service key={index} {...item} />
                ))}
            </div>

        </div>
     );
}
 
export default Tools;