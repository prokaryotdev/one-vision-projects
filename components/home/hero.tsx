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
import { cn } from "@/lib/utils";

const slides = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

const hero = () => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center px-1 py-10 text-center text-white lg:mb-6 lg:px-4 lg:py-20">
        <h1 className="z-50 mb-7 text-3xl font-bold drop-shadow-md sm:text-5xl lg:text-6xl xl:text-7xl">
          We Create the Dream <br className="hidden sm:block" /> Lifestyle You
          Desire
        </h1>

        <div className="z-50 flex items-center justify-center gap-x-4">
          <div className="group relative overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 p-0.5 shadow">
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] group-hover:bg-none" />
            <button
              className={cn(
                "flex h-10 w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 font-semibold text-zinc-200 backdrop-blur-xl",
              )}
            >
              <span> Contact Us</span>
              <ArrowRight className="size-[17px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mb-10 max-w-[1000px] overflow-hidden lg:mb-20">
        <Carousel>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative border-2 border-white/10 bg-white/20"
            >
              <div className="bg-black/60l z-50 mx-auto py-36 lg:py-60"></div>
              <Image
                className="absolute top-0 -z-10 mx-auto h-full w-full object-cover"
                src={slide}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default hero;
