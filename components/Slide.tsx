import Image from "next/image";
import Link from "next/link";

interface SlideProps {
    imageSrc?: string;
    alt?: string;
    header:string;
    desc: string;
    link: string;
    linkText: string;
}

const Slide = ({ imageSrc = "/image.jpg", alt = "Slide image",header,desc,link,linkText }: SlideProps) => {
    return ( 
        <div className="relative rounded-lg flex items-center justify-center h-[350px] w-full ">
            <Image 
                fill
                src={imageSrc} 
                alt={alt} 
                className="object-cover h-full w-full rounded-lg"
                priority
            />
            <div className="bg-black/20 w-full h-full absolute top-0 left-0 rounded-lg " />
            <div className="w-full lg:absolute lg:bottom-0 py-5 px-5 z-20 flex flex-col lg:flex-row gap-5 lg:items-end items-center justify-center text-center lg:text-left lg:justify-between ">
                <div className="text-white space-y-1">
                    <h2 className="font-semibold text-2xl text-white  ">{header}</h2>
                    <p className="text-sm">{desc}</p>
                </div>
                {/* button */}
                <div className="flex items-end justify-center sm:justify-end">
                    <Link href={link} className="w-fit min-w-[150px] text-sm py-3 px-3 font-medium rounded-full bg-white text-center text-black " > 
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Slide;
 