import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Premium logo design, brand identity, social media design, print design, packaging design, and graphic design consultation from FIRNADIQ GRAPHICS.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white px-5 pb-16 pt-32 dark:bg-[#090a18] sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Premium graphic design services for modern brands."
              description="FIRNADIQ GRAPHICS designs the visual assets businesses need to launch, market, print, package, and grow with consistency."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/8">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Every service is built around clear brand communication, premium presentation, and production-ready delivery for digital and print use.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact">Start a Project</ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <article className="group h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(17,24,39,0.12)] dark:border-white/10 dark:bg-white/8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-brand text-white transition duration-300 group-hover:bg-accent">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-ink dark:text-white">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
