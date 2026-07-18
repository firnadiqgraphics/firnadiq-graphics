"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition duration-500",
          scrolled
            ? "border-slate-200 bg-white/92 shadow-[0_20px_70px_rgba(17,24,39,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f1023]/92"
            : "border-white/60 bg-white/42 backdrop-blur-lg dark:border-white/10 dark:bg-[#0f1023]/36"
        )}
      >
        <Link
          href="/"
          className="focus-ring flex shrink-0 items-center px-2 py-1 transition duration-300 hover:scale-[1.02] sm:px-3 sm:py-1.5"
          aria-label="FIRNADIQ GRAPHICS home"
        >
          <span className="relative h-[48px] w-[170px] shrink-0 md:h-[55px] md:w-[200px] xl:h-[65px] xl:w-[240px]">
            <Image
              src="/images/firnadiq-navbar-logo-light.png"
              alt="FIRNADIQ GRAPHICS logo"
              fill
              priority
              sizes="(min-width: 1280px) 240px, (min-width: 768px) 200px, 170px"
              unoptimized
              className="absolute inset-0 object-contain object-left transition-opacity duration-200 dark:opacity-0"
            />
            <Image
              src="/images/firnadiq-navbar-logo-dark.png"
              alt="FIRNADIQ GRAPHICS logo"
              fill
              priority
              sizes="(min-width: 1280px) 240px, (min-width: 768px) 200px, 170px"
              unoptimized
              className="absolute inset-0 object-contain object-left opacity-0 transition-opacity duration-200 dark:opacity-100"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={cn(
                  "focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand/6 hover:text-brand dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white",
                  active &&
                    "bg-brand text-white hover:bg-brand hover:text-white dark:border dark:border-white/[0.08] dark:bg-white/[0.12] dark:text-white dark:backdrop-blur-xl dark:hover:bg-white/[0.12] dark:hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="https://firnadiqgraphics.myportfolio.com/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(238,71,35,0.22)] transition hover:-translate-y-0.5 hover:bg-brand md:inline-flex"
          >
            Portfolio
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            title="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition hover:border-accent hover:text-accent dark:border-white/15 dark:bg-white/10 dark:text-white xl:hidden"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-slate-200 bg-white p-3 shadow-premium dark:border-white/10 dark:bg-[#0f1023] xl:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className={cn(
                  "focus-ring rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand/6 hover:text-brand dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white",
                  pathname === item.href &&
                    "bg-brand text-white hover:bg-brand hover:text-white dark:border dark:border-white/[0.08] dark:bg-white/[0.12] dark:text-white dark:backdrop-blur-xl dark:hover:bg-white/[0.12] dark:hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-slate-200 pt-3 dark:border-white/10">
              <ThemeToggle />
              <Link
                href="https://firnadiqgraphics.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-white"
              >
                Portfolio
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
