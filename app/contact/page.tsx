import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact FIRNADIQ GRAPHICS for logo design, brand identity, print design, packaging, social media design, and freelance creative projects.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-white px-5 pb-16 pt-32 dark:bg-[#090a18] sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Start a logo, brand identity, print, packaging, or digital design project."
              description="Use the form, WhatsApp, email, or social links to contact FIRNADIQ GRAPHICS for freelance design work and creative consulting."
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <FadeIn>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/8 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <FadeIn delay={0.06}>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/8">
                <h2 className="text-xl font-semibold text-ink dark:text-white">Direct Contact</h2>
                <div className="mt-5 grid gap-3">
                  <Link
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-[8px] bg-[#25D366] px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    <MessageCircle aria-hidden className="h-5 w-5" />
                    WhatsApp
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
                  >
                    <Mail aria-hidden className="h-5 w-5" />
                    {siteConfig.email}
                  </Link>
                  <Link
                    href={siteConfig.phoneUrl}
                    className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
                  >
                    <PhoneCall aria-hidden className="h-5 w-5" />
                    {siteConfig.phone}
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
                <h2 className="text-xl font-semibold text-ink dark:text-white">Social Media Links</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {siteConfig.socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-200"
                    >
                      <ExternalLink aria-hidden className="h-4 w-4" />
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 p-6 dark:border-white/10 dark:bg-[#101225]">
                <div className="absolute inset-0 bg-grid opacity-80" />
                <div className="relative grid min-h-[212px] gap-4">
                  <div className="relative min-h-[152px] overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/8">
                    <iframe
                      title="FIRNADIQ GRAPHICS Google Maps location"
                      src={siteConfig.googleMapsEmbedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <Link
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/8 dark:text-white sm:w-fit"
                  >
                    <ExternalLink aria-hidden className="h-4 w-4" />
                    View on Google Maps
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
