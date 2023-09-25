import Carousel from "@/container/Slider/Carousel/Carousel";
import Games from "@/container/Games/Games";
import Winners from "@/container/Winners/Winners";
import NewsLetter from "@/container/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <duv>
      <Games />
      <Winners/>
      <Carousel/>
      <NewsLetter/>
    </duv>
  );
}
