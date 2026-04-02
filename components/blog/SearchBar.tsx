"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "@/components/ui/Input";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchValue = searchParams.get("search") ?? "";
  const [value, setValue] = useState(urlSearchValue);

  useEffect(() => {
    if (value === urlSearchValue) return;

    const timer = setTimeout(() => {
      const nextParams = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        nextParams.set("search", value.trim());
      } else {
        nextParams.delete("search");
      }

      const query = nextParams.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    }, 350);

    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams, urlSearchValue]);

  return (
    <div className="relative max-w-xl">
      <Search
        size={16}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
      />
      <Input
        placeholder="Tìm theo tiêu đề, mô tả hoặc thẻ..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="pr-10 pl-9"
      />
      {value ? (
        <button
          type="button"
          onClick={() => setValue("")}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          aria-label="Xóa tìm kiếm"
        >
          <X size={16} />
        </button>
      ) : null}
    </div>
  );
}
