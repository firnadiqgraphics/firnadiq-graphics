import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { whyChoose } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Meet Sayyid Muhammed Adil Farhan, independent graphic designer and founder of FIRNADIQ GRAPHICS.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-5 pb-16 pt-32 dark:bg-[#090a18] sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Meet the Founder</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl md:text-6xl">
              Sayyid Muhammed Adil Farhan
            </h1>
            <p className="mt-5 text-lg font-semibold text-brand dark:text-white">
              Independent Graphic Designer
              <br />
              FIRNADIQ GRAPHICS
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="relative isolate overflow-hidden rounded-lg border border-white/10 bg-[#0F1023] shadow-[0_28px_100px_rgba(15,16,35,0.28)]">
              <Image
                src="/images/about-me-premium-background.png"
                alt=""
                width={1600}
                height={2000}
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-0 right-0 z-0 hidden h-[94%] w-[50%] lg:block">
                <Image
                  src="/images/founder-premium-cutout-original.png"
                  alt="Sayyid Muhammed Adil Farhan, Founder & Creative Director of FIRNADIQ GRAPHICS"
                  width={1206}
                  height={1600}
                  priority
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,16,35,0.94)_0%,rgba(15,16,35,0.78)_42%,rgba(15,16,35,0.12)_72%)]" />
              <div className="relative min-h-[760px] px-6 py-12 max-lg:flex max-lg:flex-col sm:min-h-[860px] sm:px-10 sm:py-16 lg:flex lg:min-h-[960px] lg:items-center lg:px-14">
                <div className="max-w-xl lg:w-[50%]">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">About Me</p>
                  <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                    A personal creative studio built to create brands with lasting visual memory.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-white/78 sm:text-lg">
                    FIRNADIQ GRAPHICS is my independent design studio for logo design, brand identity, print design, packaging, social media visuals, and creative direction for modern brands.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/contact">Hire Me</ButtonLink>
                    <ButtonLink href="/contact" variant="secondary">
                      Contact Me
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative mt-0.5 flex h-[500px] w-full shrink-0 items-end justify-center self-center sm:mt-3 sm:h-[980px] md:h-[1000px] lg:hidden">
                  <Image
                    src="/images/founder-premium-cutout-original.png"
                    alt="Sayyid Muhammed Adil Farhan, Founder & Creative Director of FIRNADIQ GRAPHICS"
                    width={1506}
                    height={1900}
                    priority
                    className="h-full w-[98%] object-contain object-bottomscale-[1.35]"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 dark:bg-[#101225] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Our Mission</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink dark:text-white">
                Create distinctive brand visuals that feel clear, premium, and memorable.
              </h2>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                I help founders, businesses, and creators shape stronger visual identities through thoughtful logo systems, brand applications, print assets, and digital design.
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Our Vision</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink dark:text-white">
                Build a creative studio recognized for identity-led design and polished visual culture.
              </h2>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                FIRNADIQ GRAPHICS supports ambitious brands with design systems that feel premium, useful, and globally competitive.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose FIRNADIQ GRAPHICS"
              title="Brand execution shaped by real creative practice and premium visual presentation."
              align="center"
            />
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
