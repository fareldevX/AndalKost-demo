import { useState } from "react";
import { FAQS } from "../data/faqs";
import FaqItem from "./FaqItem";

/**
 * FAQ accordion section
 */
export default function FaqSection({ faqs = FAQS }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="border-y border-[#DCDAD3] px-6 py-24 lg:px-12">
      <div className="reveal-text mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="mb-4 block text-[10px] uppercase tracking-widest text-[#77756F]">
            FAQ
          </span>
          <h2 className="font-display text-4xl uppercase tracking-tight lg:text-5xl">
            COMMON INQUIRIES.
          </h2>
        </div>

        <div className="border-t border-[#171717]">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
