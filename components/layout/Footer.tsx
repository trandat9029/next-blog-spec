import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p>{SITE_NAME}</p>
        <p>Tạp chí âm nhạc độc lập</p>
      </div>
    </footer>
  );
}
