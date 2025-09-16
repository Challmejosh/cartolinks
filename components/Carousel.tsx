'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from "./Slide";
import { slides } from "@/data/slideData";
const Carousel=()=>{
    return ( 
        <div className="w-full flex items-center justify-center ">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="min-w-full w-full h-full"
            spaceBetween={30}
            // slidesPerView={2}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false
            }}
            speed={3000}
            allowTouchMove={false}
            grabCursor={false}
            breakpoints={{
                0: {
                slidesPerView: 1, // mobile
                },
                640: {
                slidesPerView: 2, // tablet and up
                },
            }}
            >
                {slides.map((slide) => (
                    <SwiperSlide className=" p-5 w-full  flex items-center justify-center" key={slide.id}>
                        <Slide 
                            imageSrc={slide.imageSrc}
                            alt={slide.alt}
                            header={slide.header}
                            desc={slide.desc}
                            link={slide.link}
                            linkText={slide.linkText}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
     );
}
 
export default Carousel;