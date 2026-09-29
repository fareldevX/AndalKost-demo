/**
 * Individual FAQ accordion item
 */
export default function FaqItem({ question, answer, isOpen, onToggle }) {
  const answerId = `faq-answer-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="border-b border-[#171717]">
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left"
        type="button"
      >
        <span className="pr-8 font-display text-xl uppercase tracking-tight transition-colors group-hover:text-[#8A9678] lg:text-2xl">
          {question}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-2xl font-light text-[#77756F]"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-64 pb-8 opacity-100" : "max-h-0 opacity-0"}`}
        id={answerId}
        aria-hidden={!isOpen}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-[#77756F]">
          {answer}
        </p>
      </div>
    </div>
  );
}
