import Carousel from "@/container/Slider/Carousel/Carousel";
import Games from "@/container/Games/Games";
import Hero from "@/container/Hero/Hero";
import Winners from "@/container/Winners/Winners";

export default function Home() {
  return (
    <duv>
      <Games />
      <Winners/>
      <Carousel/>
    </duv>
  );
}
