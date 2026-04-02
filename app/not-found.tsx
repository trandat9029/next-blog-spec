import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-3xl font-semibold text-slate-900">Không tìm thấy trang</h2>
      <p className="mt-3 text-slate-600">
        Trang bạn yêu cầu không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}

