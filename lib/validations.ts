import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string().email("Email format is invalid"),
  subject: z
    .string()
    .min(5, "Subject must contain at least 5 characters")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must contain at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export const commentSchema = z.object({
  author: z
    .string()
    .min(2, "Author name must contain at least 2 characters")
    .max(50, "Author name cannot exceed 50 characters"),
  email: z.string().email("Email format is invalid"),
  content: z
    .string()
    .min(5, "Comment must contain at least 5 characters")
    .max(500, "Comment cannot exceed 500 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type CommentInput = z.infer<typeof commentSchema>;

