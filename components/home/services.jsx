import { ArrowRight, Check } from "lucide-react";
import Img from "../../public/p3.jpg";
import Image from "next/image";

const services = [
  "Building/Construction",
  "Interior Design & Fit Out",
  "Architecture",
  "Space Planning",
  "Concept Development",
  "3D Perspective",
  "Detailed Package Drawings",
];

const Services = () => (
  <section className="relative mb-4 mr-0 py-12 lg:mr-5 xl:mr-0">
    <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 xl:gap-12">
      <div className="flex w-full items-start justify-center sm:justify-start">
        <div className="relative h-[200px] w-full border-4 border-white/20 sm:h-[300px] sm:w-[500px] lg:h-[500px] lg:w-full lg:rounded-xl lg:border-2">
          <Image
            className="absolute top-0 -z-10 mx-auto h-full w-full bg-center object-cover saturate-100 lg:rounded-xl"
            src={Img}
            alt=""
          />
        </div>
      </div>
      <div className="inline-flex w-full flex-col justify-center gap-6 lg:items-start">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <div className="flex flex-col justify-start gap-4 lg:items-start">
            <h6 className="text-base font-normal leading-relaxed text-white/50">
              Our Services
            </h6>
            <div className="flex w-full flex-col justify-start gap-y-3 lg:items-start">
              <h2 className="text-2xl font-semibold text-white/90 lg:text-start lg:text-4xl">
                Optimizing Space
              </h2>
              <p className="text-base font-[300] leading-relaxed text-white/50 lg:text-start">
                Great interior design supports your needs and lifestyle. By
                valuing each client&apos;s perspective, we create customized
                solutions that optimize space and enhance value. Our Interior
                Design Services Comprise:
              </p>
            </div>
          </div>
        </div>
        <div>
          {services.map((service, index) => (
            <div key={index} className="mb-1 flex items-center gap-2">
              <Check className="size-[20px] font-bold text-white/90" />

              <span className="text-white/90">{service}</span>
            </div>
          ))}
        </div>
        <button className="flex w-[140px] items-center justify-center gap-x-2 rounded-[4px] bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-white/90">
          <span> Learn More</span>
          <ArrowRight className="size-[17px]" />
        </button>
      </div>
    </div>
  </section>
);

export default Services;
