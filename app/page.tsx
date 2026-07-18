import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Layers3, Megaphone, PenTool, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { services, whyChoose } from "@/lib/data";
import { getGoogleReviews } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site";

export default async function HomePage() {
  const reviews = await getGoogleReviews();
  const heroStats = [
    { label: "Studio", value: "Brand Design" },
    { label: "Focus", value: "Logo & Identity" },
    { label: "Output", value: "Portfolio Quality" }
  ];

  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden bg-white px-5 pb-16 pt-32 dark:bg-[#090a18] sm:px-6 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-[#090a18]" />
        <HeroBackdrop />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Creative Design Studio & Personal Portfolio
              </p>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] text-ink dark:text-white sm:text-6xl md:text-6xl lg:text-6xl 2xl:text-8xl">
                Design.
                <br />
                Brand.
                <br />
                Stand Out.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                Premium logo design, brand identity, print design, packaging, and digital visuals for modern brands.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Hire Me</ButtonLink>
                <ButtonLink href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer" variant="secondary">
                  View Portfolio
                </ButtonLink>
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-16 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {heroStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-lg border border-slate-200 bg-white/82 p-4 shadow-[0_18px_50px_rgba(17,24,39,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-ink dark:text-white">{stat.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="What I create"
              title="A focused creative system for brands that need strong visual identity."
              description="FIRNADIQ GRAPHICS works across logo design, identity systems, print collateral, packaging, social media, and campaign visuals with a clean premium approach."
            />
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: PenTool,
                title: "Logo Design",
                description: "Distinctive marks built for recognition, balance, and long-term brand memory."
              },
              {
                icon: Layers3,
                title: "Brand Identity",
                description: "Consistent visual language built across every business touchpoint."
              },
              {
                icon: BriefcaseBusiness,
                title: "Print & Digital",
                description: "Production-ready visuals for stationery, packaging, social media, and marketing."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(17,24,39,0.12)] dark:border-white/10 dark:bg-white/8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-brand text-white">
                      <Icon aria-hidden className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 dark:bg-[#101225] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Premium graphic design services for brands that need to look sharper."
              description="From first impression to final print file, every design choice is shaped around clarity, memorability, and professional execution."
            />
            <div className="mt-8">
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <article className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_44px_rgba(17,24,39,0.07)] dark:border-white/10 dark:bg-white/8">
                    <Icon aria-hidden className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 font-semibold text-ink dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-premium dark:border-white/10 dark:bg-white/8">
              <div className="aspect-[4/3] rounded-[8px] bg-brand p-6 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Studio Process</p>
                  <Sparkles aria-hidden className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-12 max-w-sm text-3xl font-semibold leading-tight">
                  Clear creative direction from first idea to final brand asset.
                </h3>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {["Discovery", "Logo System", "Identity Direction", "Print Assets", "Digital Visuals", "Final Delivery"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-sm font-medium">
                      <Megaphone aria-hidden className="h-4 w-4 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SectionHeading
              eyebrow="Creative Direction"
              title="Design systems built for real brands, real launches, and real-world production."
              description="Every project is shaped for clarity across logo use, brand touchpoints, digital campaigns, packaging, and print-ready delivery."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Let's Work Together</ButtonLink>
              <ButtonLink href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer" variant="secondary">
                Portfolio
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 dark:bg-[#101225] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeIn>
              <SectionHeading
                eyebrow="Portfolio"
                title="Selected visual directions across logo, brand, print, social, poster, and mockup work."
              />
            </FadeIn>
            <Link
              href={siteConfig.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand transition hover:text-accent dark:text-white dark:hover:text-accent"
            >
              Full Portfolio <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <PortfolioFilter compact />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="Client words from logo, identity, packaging, and campaign design projects."
              align="center"
            />
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.slice(0, 4).map((review) => (
              <StaggerItem key={review.id}>
                <TestimonialCard {...review} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          {reviews.length === 0 && (
            <FadeIn>
              <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Google Reviews will appear here automatically once they are published.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 dark:bg-[#101225] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Why choose FIRNADIQ GRAPHICS"
              title="Brand-first creative direction and production-ready execution in one personal studio."
              align="center"
            />
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
                    <Icon aria-hidden className="h-6 w-6 text-accent" />
                    <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
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
