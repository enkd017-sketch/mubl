const partners = [
  { name: "New Uzbekistan University", logo: "/Partners/nuu.jpg" },
  { name: "Ziyoforum", logo: "/Partners/Logo_Ziyo.png" },
  { name: "Ministry of Higher Education", logo: "/Partners/Ministry_higher_education.jpg" },
  { name: "UzCosmos", logo: "/Partners/uzcosmos-logo.png" },
  { name: "PIIMA", logo: "/Partners/ptma.svg" },
];

// Duplicate for seamless infinite scroll
const items = [...partners, ...partners];

export function PartnersSection() {
  return (
    <section className="page-section py-8 md:py-10">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-blue-200/70">
          Partners
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[hsl(222,47%,11%)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[hsl(222,47%,11%)] to-transparent" />

        <div className="flex animate-scroll-partners">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex flex-shrink-0 items-center justify-center px-10"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-12 w-auto max-w-[160px] object-contain brightness-0 invert opacity-60 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
