import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-white dark:bg-[#090a18]">
      <div className="grid justify-items-center gap-5">
        <Image
          src="/images/firnadiq-logo-nav.jpg"
          alt="FIRNADIQ GRAPHICS logo"
          width={360}
          height={203}
          priority
          className="h-32 w-72 animate-pulse rounded-[8px] object-contain object-center shadow-premium"
        />
        <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div className="h-full w-1/2 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
