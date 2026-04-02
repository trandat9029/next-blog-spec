import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Thông tin tác giả và phần giới thiệu dự án blog âm nhạc.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
      <article className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
            Tác giả
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">Trần Đạt</h1>
          <p className="text-slate-600">Frontend Developer</p>
        </div>

        <dl className="space-y-4 text-sm text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">Vị trí</dt>
            <dd>Frontend Developer</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Địa chỉ</dt>
            <dd>Việt Nam</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">GitHub</dt>
            <dd>
              <a
                href="https://github.com/trandat9029"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-800"
              >
                github.com/trandat9029
              </a>
            </dd>
          </div>
        </dl>
      </article>

      <article className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
            Dự án
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Giới thiệu blog âm nhạc
          </h2>
        </div>

        <p className="text-slate-700">
          Đây là một dự án blog âm nhạc được xây dựng để chia sẻ bài viết về
          playlist, album, live session và những thay đổi trong thói quen nghe
          nhạc hiện nay.
        </p>

        <p className="text-slate-700">
          Mục tiêu của dự án là tạo ra một không gian đọc gọn gàng, dễ theo dõi
          và có cá tính rõ ràng, nơi người xem có thể khám phá nội dung theo chủ
          đề thay vì chỉ đọc các mẩu tin rời rạc.
        </p>

        <p className="text-slate-700">
          Về mặt giao diện, dự án đang hướng đến cảm giác hiện đại, nhẹ, và phù
          hợp với một tạp chí âm nhạc cá nhân: có bài nổi bật, có phân loại nội
          dung, có trang chi tiết và phần liên hệ để kết nối với người đọc.
        </p>
      </article>
    </section>
  );
}
