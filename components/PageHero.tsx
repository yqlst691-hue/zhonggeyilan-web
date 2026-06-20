interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

export default function PageHero({ title, subtitle, bgColor = 'from-dark to-dark-light' }: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-br ${bgColor} text-white py-16 sm:py-20 lg:py-24`}>
      <div className="container-main">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
