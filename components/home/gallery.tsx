import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Img1 from "../../public/img1.jpg";
import Img2 from "../../public/img2.jpg";
import Img3 from "../../public/img3.jpg";
import Img4 from "../../public/img4.jpg";

const imageUrls = [Img1, Img2, Img3, Img4];

const Gallery = () => (
  <>
    <hr className="mb-12 opacity-[.3] sm:mb-6 sm:opacity-0" />
    <div className="mb-8 grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2">
      <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
        <div className="flex w-full flex-col items-start justify-center gap-8">
          <div className="flex w-full flex-col justify-start gap-3 lg:items-start">
            <h2 className="text-4xl font-semibold text-white/90 lg:text-start">
              Gallery
            </h2>
            <p className="mb-2 text-base font-light leading-relaxed text-white/50 lg:text-start">
              Explore our Gallery to see how we bring our clients' visions to
              life with exceptional design and creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="order-last flex w-full flex-wrap gap-4">
        <button className="flex items-center gap-x-2 rounded-[8px] border-2 border-white/10 px-4 py-2 text-sm font-bold text-white/80 transition-colors hover:bg-white/5 lg:ml-auto">
          <span> View All</span>
          <ArrowRight className="size-[17px]" />
        </button>
      </div>
    </div>

    <div className="mb-16 grid gap-6 sm:grid-cols-2 sm:gap-4">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center rounded-md border border-white/10 p-2 transition-all duration-500 lg:max-w-lg lg:flex-row lg:p-4"
        >
          <div className="relative block h-48 w-full border-4 border-white/10 md:w-[300px]">
            <Image
              className="absolute top-0 -z-10 mx-auto h-full w-full object-cover saturate-100"
              src={url}
              alt=""
            />
          </div>
          <div className="p-4">
            <h4 className="mb-2 text-base font-semibold capitalize text-white/90 transition-all duration-500">
              Beauty Parlour Design
            </h4>
            <p className="mb-5 text-sm font-normal leading-5 text-white/50 transition-all duration-500">
              View our Gallery for elegant and functional beauty parlour
              designs.
            </p>
            <button className="flex items-center gap-x-2 rounded-[8px] border border-white/10 px-4 py-2 text-sm font-bold text-white/80 transition-colors hover:bg-white/5">
              <span> View Project</span>
              <Search className="size-[17px]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Gallery;
