import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="mx-auto mb-8 max-w-md text-center lg:flex-auto">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Transform Your Space <br className="hidden lg:block" /> Functionality
        and Style
      </h2>
      <p className="mt-4 font-light leading-relaxed text-white/50 lg:mt-6 lg:text-lg">
        Contact us to transform your area into a stylish and functional
        environment you&apos;ll love.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
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
  );
};

export default Contact;
