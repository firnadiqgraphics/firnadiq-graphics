"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { portfolioCategories, portfolioItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PortfolioFilter({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState("All");

  const visibleItems = useMemo(() => {
    if (active === "All") {
      return compact ? portfolioItems.slice(0, 6) : portfolioItems;
    }

    const filtered = portfolioItems.filter((item) => item.category === active);
    return compact ? filtered.slice(0, 6) : filtered;
  }, [active, compact]);

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/8">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
              active === category
                ? "bg-brand text-white shadow-[0_12px_30px_rgba(36,30,92,0.18)]"
                : "text-slate-600 hover:bg-slate-100 hover:text-brand dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <motion.article
            layout
            key={`${item.title}-${item.category}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_60px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(17,24,39,0.12)] dark:border-white/10 dark:bg-white/8"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-[#16182d]"
              style={{ "--accent": item.accent } as CSSProperties}
            >
              <div className="absolute inset-0 bg-grid opacity-70" />
              <div className="absolute left-6 top-6 h-14 w-14 rounded-[8px] border border-white/70 bg-white/85 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/12" />
              <div className="absolute right-6 top-8 h-2 w-24 rounded-full bg-[var(--accent)]" />
              <div className="absolute bottom-8 left-6 right-6">
                <div className="h-20 rounded-[8px] border border-white/70 bg-white/88 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#0f1023]/86">
                  <div className="h-2 w-28 rounded-full bg-[var(--accent)]" />
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-200 dark:bg-white/15" />
                  <div className="mt-3 h-2 w-2/3 rounded-full bg-slate-200 dark:bg-white/15" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full border-[10px] border-[var(--accent)] opacity-90 transition duration-300 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
