interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <section id={id} className={`container-main py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}
