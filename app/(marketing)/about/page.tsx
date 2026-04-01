import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About this Next.js learning blog project.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-semibold text-slate-900">About this project</h1>
      <p className="text-slate-700">
        The app is designed as a teaching playground for App Router, server and
        client components, and practical form validation with API routes.
      </p>
      <p className="text-slate-700">
        It keeps the code intentionally small so learners can follow every layer
        from route setup to data and UI behavior.
      </p>
    </article>
  );
}

