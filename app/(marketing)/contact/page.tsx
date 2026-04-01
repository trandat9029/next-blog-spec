import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message through the contact form demo.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
      <p className="text-slate-700">
        Fill out the form below to test React Hook Form and Zod integration
        with a Next.js API route.
      </p>
      <ContactForm />
    </div>
  );
}

