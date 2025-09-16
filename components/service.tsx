import { ReactNode } from "react";

interface Props{
    icon:ReactNode;
    title:string;
    desc:string;
    newF?:boolean;
}
const Service = ({icon,title,desc,newF,}:Props) => {
    return ( 
        <div className="w-full  flex items-start justify-between gap-3">
            <div className="w-[70px]  ">
                {icon}
            </div>
            <div className="flex w-full items-center justify-between gap-3 ">
                <div className="flex flex-col gap-1 items-start justify-center ">
                    <div className="flex items-center justify-start gap-2">
                        {title} 
                        {newF&&
                            <p className="capitalize w-[50px] text-xs bg-blue-600 rounded-full text-center text-white py-1 px-2 ">
                                new
                            </p>
                        }
                    </div>
                    <div className="text-sm text-gray-500">
                        {desc}
                    </div>
                </div>
                <p className=" capitalize w-[70px] bg-[#f6f6f6] rounded-full text-center text-black px-2 py-1 text-sm ">Open</p>
            </div>
        </div>
     );
}
 
export default Service;