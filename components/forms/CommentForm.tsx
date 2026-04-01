"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { commentSchema, type CommentInput } from "@/lib/validations";

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentInput>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      author: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (values: CommentInput) => {
    await new Promise((resolve) => setTimeout(resolve, 350));
    toast.success(`Comment queued for post ${postId}`);
    reset();
    void values;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 rounded-xl border border-slate-200 bg-white p-4"
      noValidate
    >
      <h3 className="font-serif text-lg font-semibold text-slate-900">Leave a comment</h3>

      <div>
        <Input placeholder="Your name" {...register("author")} />
        {errors.author ? (
          <p className="mt-1 text-sm text-rose-600">{errors.author.message}</p>
        ) : null}
      </div>

      <div>
        <Input type="email" placeholder="Your email" {...register("email")} />
        {errors.email ? (
          <p className="mt-1 text-sm text-rose-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <Textarea rows={4} placeholder="Add your comment" {...register("content")} />
        {errors.content ? (
          <p className="mt-1 text-sm text-rose-600">{errors.content.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Posting..." : "Post comment"}
      </Button>
    </form>
  );
}

