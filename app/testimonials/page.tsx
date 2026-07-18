import type { Metadata } from "next";
import { Star } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { getGoogleReviews } from "@/lib/google-reviews";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description:
    "Google Reviews style testimonials for FIRNADIQ GRAPHICS logo design, brand identity, packaging, print, and digital design projects.",
  path: "/testimonials"
});

export default async function TestimonialsPage() {
  const reviews = await getGoogleReviews();
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
      : "Google";

  return (
    <>
      <section className="bg-white px-5 pb-16 pt-32 dark:bg-[#090a18] sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="Testimonials"
              title="Google Reviews style cards for clients and creative brand projects."
              description="FIRNADIQ GRAPHICS is designed to feel practical, premium, and easy to trust across logo, identity, packaging, print, and digital design work."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/8">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-3xl font-semibold text-ink dark:text-white">{averageRating}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Live Google Reviews synced from the FIRNADIQ GRAPHICS Google Business Profile.
              </p>
              <Link
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-5 inline-flex min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand"
              >
                Write a Google Review
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {reviews.length > 0 ? (
            <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((review) => (
                <StaggerItem key={review.id}>
                  <TestimonialCard {...review} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Google Reviews will appear here automatically once they are published.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
