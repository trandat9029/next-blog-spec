"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import type { Post } from "@/types";
import CategoryBadge from "@/components/blog/CategoryBadge";
import Card from "@/components/ui/Card";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 w-full bg-slate-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
          <CategoryBadge label={post.category.name} slug={post.category.slug} />
          <span>{post.readingTime} phút đọc</span>
        </div>

        <h3 className="font-heading text-xl font-semibold leading-tight text-slate-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-teal-700">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-slate-600">{post.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{post.author.name}</span>
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), "d MMM yyyy", { locale: vi })}
          </time>
        </div>
      </div>
    </Card>
  );
}

