import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="bg-brand px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Start with FIRNADIQ GRAPHICS</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Build a sharper brand identity with premium creative direction.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href="/contact" className="bg-white text-brand hover:bg-accent hover:text-white">
            Hire Me
          </ButtonLink>
          <ButtonLink
            href={siteConfig.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="border-white/20 bg-white/10 text-white hover:border-white hover:text-white"
          >
            Portfolio
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
