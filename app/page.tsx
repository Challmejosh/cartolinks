import Carousel from "@/components/Carousel";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="space-y-6 my-6 min-h-dvh">
      <Carousel />
      <Tools />
    </div>
  );
}
