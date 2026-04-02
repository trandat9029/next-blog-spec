"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Bài viết", href: "/blog" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Điều hướng chính">
      <ul className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex rounded-full px-3 py-1.5 text-sm font-medium transition",
                  isActive
                    ? "bg-teal-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

