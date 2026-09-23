import React from 'react';

/**
 * Standardized section header with eyebrow badge, h2 title, and subtitle
 */
export default function SectionHeader({
  badge,
  title,
  description,
  theme = 'light',
  maxWidth = 'max-w-3xl',
  className = '',
  children
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`text-center ${maxWidth} mx-auto space-y-4 ${className}`}>
      {badge && (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark
              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
              : 'bg-orange-100 text-orange-700'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
