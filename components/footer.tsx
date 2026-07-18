import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Camera, PlayCircle, Users } from "lucide-react";
import { navItems, services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const socialIcons = {
  Instagram: Camera,
  Facebook: Users,
  LinkedIn: BriefcaseBusiness,
  YouTube: PlayCircle
};

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:px-8">
        <div>
          <div className="flex h-[88px] w-64 items-center justify-center rounded-[8px] p-2 ring-1 ring-white/10">
            <Image
              src="/images/firnadiq-footer-official-full-white-transparent.png"
              alt="FIRNADIQ GRAPHICS logo"
              width={5156}
              height={1196}
              sizes="205px"
              className="h-[72px] w-[80%] object-contain object-center"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{siteConfig.tagline}</p>
          <div className="mt-6 flex items-center gap-2">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-accent hover:bg-accent hover:text-white"
                >
                  {Icon && <Icon aria-hidden className="h-4 w-4" />}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="transition hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} FIRNADIQ GRAPHICS. All rights reserved.</p>
          <p>Creative Design Studio & Personal Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
