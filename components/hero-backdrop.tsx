"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Layers3, PenTool, Sparkles } from "lucide-react";

export function HeroBackdrop() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 58]);
  const rotate = useTransform(scrollY, [0, 600], [0, -3]);

  return (
    <motion.div
      aria-hidden
      style={{ y, rotate }}
      className="pointer-events-none absolute inset-y-16 right-[-24%] hidden w-[48%] opacity-100 md:block 2xl:right-[-12%] 2xl:w-[52%]"
    >
      <div className="relative h-full min-h-[580px]">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[5%] h-[72%] w-[72%] rounded-[8px] border border-slate-200 bg-white/80 p-5 shadow-[0_34px_90px_rgba(36,30,92,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
        >
          <div className="h-full rounded-[8px] bg-[linear-gradient(135deg,#241E5C_0%,#3b2f8f_44%,#EE4723_100%)] p-5">
            <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-4">
              <div className="grid gap-4">
                <div className="rounded-[8px] bg-white/14 p-4">
                  <PenTool className="h-6 w-6 text-white" />
                  <div className="mt-8 h-2 w-20 rounded-full bg-white/70" />
                  <div className="mt-3 h-2 w-12 rounded-full bg-white/30" />
                </div>
                <div className="rounded-[8px] bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="h-8 rounded-[6px] bg-brand" />
                    <span className="h-8 rounded-[6px] bg-accent" />
                    <span className="h-8 rounded-[6px] bg-[#111827]" />
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-slate-200" />
                  <div className="mt-3 h-2 w-2/3 rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[8px] bg-white/12">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute left-8 top-8 h-20 w-40 rounded-[8px] border border-white/20 bg-white/16" />
                <div className="absolute bottom-8 right-8 h-44 w-44 rotate-45 rounded-[8px] border-[18px] border-white/22" />
                <div className="absolute left-10 top-40 h-3 w-48 rounded-full bg-white/70" />
                <div className="absolute left-10 top-52 h-3 w-32 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] top-[11%] rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(17,24,39,0.14)] dark:border-white/10 dark:bg-[#111827]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-accent text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="grid gap-2">
              <span className="h-2 w-24 rounded-full bg-slate-200 dark:bg-white/20" />
              <span className="h-2 w-16 rounded-full bg-slate-200 dark:bg-white/20" />
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] left-[2%] w-72 rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(17,24,39,0.12)] dark:border-white/10 dark:bg-[#111827]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-brand text-white">
              <Layers3 className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block h-2 rounded-full bg-slate-200 dark:bg-white/20" />
              <span className="mt-3 block h-2 w-3/4 rounded-full bg-slate-200 dark:bg-white/20" />
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: [8, 14, 8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[6%] right-[18%] h-32 w-32 rounded-[8px] border-[14px] border-accent/80"
        />
      </div>
    </motion.div>
  );
}
