import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  photoUrl?: string;
  rating?: number;
  text: string;
  date?: string;
};

export function TestimonialCard({ name, photoUrl, rating = 5, text, date }: TestimonialCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/8">
      <div className="flex items-center gap-1 text-[#F59E0B]" aria-label={`${rating} star Google review`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} aria-hidden className={index < rating ? "h-4 w-4 fill-current" : "h-4 w-4"} />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200">"{text}"</p>
      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
        <div className="flex items-center gap-3">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`${name} Google profile`}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-ink dark:text-white">{name}</h3>
            {date && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{date}</p>}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#4285F4] shadow-sm">
            G
          </span>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Verified Google Review</p>
        </div>
      </div>
    </article>
  );
}
