export default function FacilityItem({ item }) {
  return (
    <div className="group grid cursor-default grid-cols-1 items-start gap-4 border-t border-[#171717] px-4 py-10 transition-all duration-300 hover:bg-[#171717] hover:text-[#F5F4EF] md:grid-cols-12 md:items-center md:gap-8">
      <div className="md:col-span-1">
        <span className="font-display text-3xl text-[#77756F] transition-colors group-hover:text-[#8A9678] lg:text-4xl">
          {item.number}
        </span>
      </div>
      <div className="md:col-span-4">
        <h3 className="font-display text-2xl uppercase tracking-tight lg:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-[#77756F] group-hover:text-[#DCDAD3]">
          {item.subtitle}
        </p>
      </div>
      <div className="md:col-span-7">
        <p className="max-w-xl text-sm leading-relaxed text-[#77756F] transition-colors group-hover:text-[#F5F4EF] md:ml-auto">
          {item.description}
        </p>
      </div>
    </div>
  );
}
