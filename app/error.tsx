"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function RootError({
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
      <h2 className="text-xl font-semibold">Ứng dụng gặp lỗi ngoài mong đợi</h2>
      <p className="mt-2 text-sm">
        Vui lòng thử lại. Nếu lỗi lặp lại, hãy kiểm tra log và route handler.
      </p>
      <Button className="mt-4" onClick={reset}>
        Thử lại
      </Button>
    </div>
  );
}

