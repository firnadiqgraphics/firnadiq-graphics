import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
