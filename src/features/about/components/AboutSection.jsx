const ABOUT_COPY =
  "Mencari hunian sewa yang nyaman seharusnya tidak rumit. Kami menghadirkan standar kualitas tanpa kompromi.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 lg:px-12 lg:py-48"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <span className="divider-expand mb-8 inline-block border-b border-[#171717] px-4 pb-2 text-[10px] uppercase tracking-widest text-[#77756F]">
          THE ANDALKOST PHILOSOPHY
        </span>

        <h2 className="about-text max-w-5xl font-display text-3xl uppercase leading-[1.1] tracking-tight md:text-5xl lg:text-7xl">
          {ABOUT_COPY.split(" ").map((word, index) => (
            <span
              className="scrub-word mr-[0.2em] inline-block"
              key={`${word}-${index}`}
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="reveal-text mt-12 max-w-2xl text-sm leading-relaxed text-[#77756F] md:text-base">
          Seluruh unit kamar kami dikelola secara profesional dengan
          pemeliharaan berkala, menjadikan pengalaman tinggal Anda tenang dan
          fokus pada hal penting sehari-hari. Desain editorial, fungsi maksimal.
        </p>
      </div>
    </section>
  );
}
