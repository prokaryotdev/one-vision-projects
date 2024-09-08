import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="mx-auto mb-8 max-w-md text-center lg:flex-auto">
      <h2 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-4xl lg:text-3xl">
        Transform Your Space <br className="hidden lg:block" /> Functionality
        and Style
      </h2>
      <p className="mt-4 font-light leading-8 text-white/50 lg:mt-6 lg:text-lg">
        Contact us to transform your area into a stylish and functional
        environment you&apos;ll love.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="flex items-center gap-x-2 rounded-[8px] border-2 border-white/10 px-4 py-2 text-sm font-bold text-white/80 transition-colors hover:bg-white/5">
          <span> Contact Us</span>
          <ArrowRight className="size-[17px]" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
