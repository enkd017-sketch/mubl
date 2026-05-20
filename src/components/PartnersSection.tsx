const partners = [
  { name: "New Uzbekistan University", logo: "/Partners/nuu.jpg" },
  { name: "Ziyoforum", logo: "/Partners/Logo_Ziyo.png" },
  { name: "Ministry of Higher Education", logo: "/Partners/Ministry_higher_education.png" },
  {
    name: "UzCosmos",
    logoLight: "/Partners/uzcosmos-logo_blue.png",
    logoDark: "/Partners/uzcosmos-logo_white.png",
  },
  { name: "PIIMA", logo: "/Partners/ptma.svg" },
];

// Repeat the set so the track stays wider than the viewport and the -50%
// keyframe (one half of the track) lands on an identical copy for a seamless loop.
const items = [...partners, ...partners, ...partners, ...partners];

export function PartnersSection() {
  return (
    <section className="page-section py-8 md:py-10">
      <div className="mb-6 text-center">
        <p className="text-base font-bold uppercase tracking-[0.22em] text-blue-700 dark:text-white md:text-lg">
          Partners
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll-partners">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex flex-shrink-0 items-center justify-center px-10"
            >
              {"logoLight" in partner ? (
                <>
                  <img
                    src={partner.logoLight}
                    alt={partner.name}
                    loading="lazy"
                    className="h-12 w-auto max-w-[160px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 dark:hidden"
                  />
                  <img
                    src={partner.logoDark}
                    alt={partner.name}
                    loading="lazy"
                    className="hidden h-12 w-auto max-w-[160px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 dark:block dark:opacity-60 dark:hover:opacity-100"
                  />
                </>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-12 w-auto max-w-[160px] object-contain opacity-80 mix-blend-multiply transition-opacity duration-300 hover:opacity-100 dark:mix-blend-normal dark:brightness-0 dark:invert dark:opacity-60 dark:hover:opacity-100"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
