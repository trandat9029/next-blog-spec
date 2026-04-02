import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(50, "Họ tên không được vượt quá 50 ký tự"),
  email: z.string().email("Email không đúng định dạng"),
  subject: z
    .string()
    .min(5, "Chủ đề phải có ít nhất 5 ký tự")
    .max(100, "Chủ đề không được vượt quá 100 ký tự"),
  message: z
    .string()
    .min(10, "Nội dung phải có ít nhất 10 ký tự")
    .max(1000, "Nội dung không được vượt quá 1000 ký tự"),
});

export const commentSchema = z.object({
  author: z
    .string()
    .min(2, "Tên hiển thị phải có ít nhất 2 ký tự")
    .max(50, "Tên hiển thị không được vượt quá 50 ký tự"),
  email: z.string().email("Email không đúng định dạng"),
  content: z
    .string()
    .min(5, "Bình luận phải có ít nhất 5 ký tự")
    .max(500, "Bình luận không được vượt quá 500 ký tự"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type CommentInput = z.infer<typeof commentSchema>;

