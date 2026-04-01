"use client";

import Link from "next/link";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl font-semibold text-slate-900">
          NextJS Blog
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

