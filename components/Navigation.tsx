'use client'
import { AxeIcon, Bell, Edit,  Folder,    Home, Image, LucideHeadphones, Pencil, Sun, Video } from "lucide-react";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

const Navigation = () => {
const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active,setActive] = useState<string>("/")

  // Fix hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
    const links:{icon:ReactNode,link:string}[]=[
        {icon: <Home /> , link: '/'},
        {icon: <Image  /> , link: '/image'},
        {icon: <Video /> , link: '/video'},
        {icon: <Edit /> , link: '/dit'},
        {icon: <Pencil /> , link: '/pencil'},
        {icon: <Home /> , link: '/home'},
        {icon: <Folder /> , link: '/folder'},
    ]
    const changeActive = (text:string)=> setActive(text)
    return ( 
        <div className={` py-2 px-3 flex-wrap-reverse sm:flex-nowrap w-full sm:px-4 flex gap-1 items-center justify-between `}>
            {/* first section */}
            {/* desktop */}
            <div className="hidden w-full lg:flex gap-5 items-center justify-start  ">
                <AxeIcon />
                <div className="flex gap-2 items-center justify-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-tr from-[#e09ee5] to-[#98a9f5] " />
                    <select name="" className="hidden lg:block focus:outline-none cursor-pointer" id="">
                        <option value="">Benevolence</option>
                    </select>
                </div>
            </div>
            {/* mobile */}
            {/* second section */}
            <nav className="flex-grow flex-wrap sm:flex-nowrap flex gap-1 items-center justify-between py-2 px-3 w-full sm:w-auto bg-[#f6f6f6] rounded-lg ">
                {links.map((link,index)=>(
                    <div onClick={()=>changeActive(link.link)} key={index} className={`${active===link.link?"bg-white rounded-lg  ":""} duration-300 transform transition-transform cursor-pointer p-2 `}>
                        {link.icon}
                    </div>
                ))}
            </nav>
            {/* third section */}
            {/* desktop */}
            <div className="hidden w-full lg:flex gap-2 items-center justify-end">
                <div className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                    <Image />
                    Gallery
                </div>
                <div className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                    <LucideHeadphones />
                    Support
                </div>
                <div className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                    <Bell />
                </div>
                <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                    <Sun />
                </div>
                <div className="w-[30px] h-[30px] hidden lg:block rounded-full bg-gradient-to-tr from-[#e09ee5] to-[#98a9f5] " />
            </div>
            {/* mobile */}
            <div className="lg:hidden w-full flex justify-between items-center gap-1 ">
                <AxeIcon />
                <div className="flex gap-2 items-center justify-center">
                    <div className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                        <Bell />
                    </div>
                    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-[#f6f6f6] font-medium rounded-md p-1 text-sm cursor-pointer flex gap-1 items-center justify-center">
                        <Sun />
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Navigation;