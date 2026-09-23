import React, { useState } from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';
import { FAQS } from '../data/faqs';
import FaqItem from './FaqItem';

/**
 * FAQ accordion section
 */
export default function FaqSection({ faqs = FAQS }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about checking in, house rules, and monthly billing."
        />

        <div className="mt-12 space-y-4">
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
