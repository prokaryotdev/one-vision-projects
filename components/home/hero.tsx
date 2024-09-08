import Image from "next/image";
import Img1 from "../.././public/img1.jpg";
import Img2 from "../.././public/img2.jpg";
import Img3 from "../.././public/img3.jpg";
import Img4 from "../.././public/img4.jpg";
import Img5 from "../.././public/img5.jpg";
import Img6 from "../.././public/img6.jpg";
import Img7 from "../.././public/img7.jpg";
import Img8 from "../.././public/img8.jpg";
import Img9 from "../.././public/img9.jpg";
import { ArrowRight } from "lucide-react";
import { Carousel } from "flowbite-react";

const slides = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

const hero = () => {
  return (
    <div className="relative mx-auto mb-10 max-w-[1000px] overflow-hidden rounded-xl bg-white/20 lg:mb-20">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="z-50 mx-auto bg-black/60 py-40 lg:py-60"></div>
            <Image
              className="absolute top-0 -z-10 mx-auto h-full w-full object-cover saturate-100"
              src={slide}
              alt=""
            />
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-[10%] left-16 right-16 top-[10%] mx-auto flex max-w-[900px] flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-7 text-2xl font-bold drop-shadow-md sm:text-4xl lg:text-6xl xl:text-7xl">
          We Create the Dream Lifestyle You Desire
        </h1>

        <div className="flex items-center justify-center gap-x-4">
          <button className="flex items-center gap-x-2 rounded-[4px] bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-white/90">
            <span> Contact Us</span>
            <ArrowRight className="size-[17px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
