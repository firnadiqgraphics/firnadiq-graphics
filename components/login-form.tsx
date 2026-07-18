"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader2, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const auth = getFirebaseAuth();
    if (!auth) {
      setMessage("Student login is ready for Firebase credentials.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful.");
    } catch {
      setMessage("Please check the email and password, then try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Email address
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="focus-ring min-h-12 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-ink shadow-sm transition focus:border-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
          placeholder="student@firnadiqgraphics.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="focus-ring min-h-12 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-ink shadow-sm transition focus:border-accent dark:border-white/10 dark:bg-white/8 dark:text-white"
          placeholder="Enter password"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(36,30,92,0.22)] transition hover:-translate-y-0.5 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> : <LockKeyhole aria-hidden className="h-4 w-4" />}
        Student Login
      </button>
      {message && <p className="rounded-[8px] bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-200">{message}</p>}
    </form>
  );
}
