import type { Metadata } from "next";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { notFound } from "next/navigation";
import PostContent from "@/components/blog/PostContent";
import { getAllPosts, getPostBySlug } from "@/lib/api";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
      description: "Bài viết bạn yêu cầu không tồn tại.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="max-w-3xl text-lg text-slate-700">{post.excerpt}</p>
        <div className="text-sm text-slate-500">
          <span>{post.author.name}</span>
          <span className="mx-2">|</span>
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: vi })}
          </time>
          <span className="mx-2">|</span>
          <span>{post.readingTime} phút đọc</span>
        </div>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <PostContent content={post.content} />
      </section>
    </article>
  );
}

