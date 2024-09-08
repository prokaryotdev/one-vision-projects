import { ArrowRight, Award, ListChecks, Pickaxe, ThumbsUp } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Pickaxe />,
    value: "09",
    label: "Year of Experience",
  },
  {
    id: 2,
    icon: <ListChecks />,
    value: "50+",
    label: "Successful Projects",
  },
  {
    id: 3,
    icon: <Award />,
    value: "25",
    label: "Achieve Awards",
  },
  {
    id: 4,
    icon: <ThumbsUp />,
    value: "100%",
    label: "Positive Reviews",
  },
];

const About = () => (
  <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:mb-8 lg:grid-cols-2 lg:gap-12">
    <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="flex w-full flex-col justify-start gap-3 lg:items-start">
          <h2 className="text-2xl font-semibold text-white/90 lg:text-start lg:text-4xl">
            One Vision Projects
          </h2>
          <p className="mb-2 text-base font-[300] leading-relaxed text-white/50 lg:text-start">
            Established in 2015 in Doha, One Vision Projects is known for its
            elegance and superior quality, as evidenced by our extensive list of
            repeat clients, reflecting our commitment to excellence and customer
            satisfaction.
          </p>
          <button className="flex w-[140px] items-center justify-center gap-x-2 rounded-[4px] bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-white/90">
            <span> Learn More</span>
            <ArrowRight className="size-[17px]" />
          </button>
        </div>
      </div>
    </div>
    <div className="order-last flex w-full flex-wrap gap-4">
      {stats.map(({ id, icon, value, label }) => (
        <div
          key={id}
          className="flex w-full items-center gap-4 rounded border border-white/10 bg-gradient-to-bl from-neutral-900 via-white/20 to-neutral-900 p-2 px-3 sm:w-[45%]"
        >
          <div className="flex size-[40px] items-center justify-center rounded-md bg-black/40 p-2">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white/90">{value}</h3>
            <p className="text-xs text-white/50">{label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
