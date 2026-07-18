"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Your message is ready to send from your email app.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Name
          <input
            name="name"
            required
            className="focus-ring min-h-12 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-ink shadow-sm transition focus:border-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Email
          <input
            type="email"
            name="email"
            required
            className="focus-ring min-h-12 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-ink shadow-sm transition focus:border-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="focus-ring rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm transition focus:border-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
          placeholder="Tell me about your logo, brand identity, print, packaging, or social media design project"
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(36,30,92,0.22)] transition hover:-translate-y-0.5 hover:bg-accent sm:w-fit"
      >
        <Send aria-hidden className="h-4 w-4" />
        Send Message
      </button>
      {status && <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{status}</p>}
    </form>
  );
}
