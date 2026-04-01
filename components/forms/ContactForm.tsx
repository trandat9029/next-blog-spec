"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { type ContactInput, contactSchema } from "@/lib/validations";

type ApiResponse =
  | { success: true; message: string }
  | { success: false; message?: string; errors?: { message: string }[] };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactInput) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as ApiResponse;

    if (!response.ok || !payload.success) {
      const fallback = "Unable to submit the form right now.";
      const firstValidationError =
        "errors" in payload ? payload.errors?.[0]?.message : undefined;
      const message = payload.message ?? fallback;
      toast.error(firstValidationError ?? message);
      return;
    }

    toast.success(payload.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <Input id="name" placeholder="Your name" {...register("name")} />
        {errors.name ? (
          <p className="text-sm text-rose-600">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-rose-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-slate-700">
          Subject
        </label>
        <Input id="subject" placeholder="What is this about?" {...register("subject")} />
        {errors.subject ? (
          <p className="text-sm text-rose-600">{errors.subject.message}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Write your message..."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-rose-600">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
