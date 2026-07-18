import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className, target, rel }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "bg-brand text-white shadow-[0_14px_36px_rgba(36,30,92,0.2)] hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_18px_42px_rgba(238,71,35,0.22)]",
        variant === "secondary" &&
          "border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/40",
        variant === "ghost" && "text-brand hover:bg-brand/5 dark:text-white dark:hover:bg-white/10",
        className
      )}
    >
      <span>{children}</span>
      {variant !== "ghost" && <ArrowRight aria-hidden className="h-4 w-4" />}
    </Link>
  );
}
