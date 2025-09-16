export interface SlideData {
    id: number;
    imageSrc: string;
    alt: string;
    header: string;
    desc: string;
    link: string;
    linkText: string;
}

export const slides: SlideData[] = [
    {
        id: 1,
        imageSrc: "/image.jpg",
        alt: "Web Development",
        header: "Modern Web Solutions",
        desc: "Leverage the power of artificial intelligence for your business Scale your business with our robust cloud infrastructure Create stunning websites with our cutting-edge development services Transform your ideas into powerful mobile application",
        link: "/services/web-development",
        linkText: "Learn More"
    },
    {
        id: 2,
        imageSrc: "/image.jpg",
        alt: "Mobile Apps",
        header: "Mobile Applications",
        desc: "Leverage the power of artificial intelligence for your business Scale your business with our robust cloud infrastructure Create stunning websites with our cutting-edge development services Transform your ideas into powerful mobile application",
        link: "/services/mobile-apps",
        linkText: "Discover More"
    },
    {
        id: 3,
        imageSrc: "/image.jpg",
        alt: "Cloud Services",
        header: "Cloud Solutions",
        desc: "Leverage the power of artificial intelligence for your business Scale your business with our robust cloud infrastructure Create stunning websites with our cutting-edge development services Transform your ideas into powerful mobile application",
        link: "/services/cloud",
        linkText: "Explore Services"
    },
    {
        id: 4,
        imageSrc: "/image.jpg",
        alt: "AI Solutions",
        header: "AI & Machine Learning",
        desc: "Leverage the power of artificial intelligence for your business Scale your business with our robust cloud infrastructure Create stunning websites with our cutting-edge development services Transform your ideas into powerful mobile application",
        link: "/services/ai",
        linkText: "Get Started"
    }
];