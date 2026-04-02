"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-rose-800">
      <h2 className="text-xl font-semibold">Không thể tải trang bài viết</h2>
      <p className="mt-2 text-sm">
        Vui lòng thử lại. Nếu lỗi tiếp tục xảy ra, hãy kiểm tra log máy chủ.
      </p>
      <Button className="mt-4" onClick={reset}>
        Thử lại
      </Button>
    </div>
  );
}
