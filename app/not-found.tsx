import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="px-5 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Return to FIRNADIQ GRAPHICS and continue exploring the studio, academy, portfolio, and student app.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
