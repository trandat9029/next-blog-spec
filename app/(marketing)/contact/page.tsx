import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ để gửi playlist, đề xuất chủ đề hoặc hợp tác nội dung.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold text-slate-900">Liên hệ</h1>
      <p className="text-slate-700">
        Gửi playlist, đề xuất album cần review hoặc liên hệ hợp tác nội dung
        qua form bên dưới.
      </p>
      <ContactForm />
    </div>
  );
}

