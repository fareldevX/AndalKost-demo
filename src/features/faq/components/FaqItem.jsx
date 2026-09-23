import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Individual FAQ accordion item
 */
export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-orange-600' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed animate-in fade-in duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}
