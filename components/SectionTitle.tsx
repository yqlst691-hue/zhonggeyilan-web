interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClass} mb-10 sm:mb-14`}>
      <div className="text-primary-light font-medium text-sm mb-3">—— 专业环保解决方案 ——</div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
