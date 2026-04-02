import type { Metadata } from "next";
import Link from "next/link";
import PostList from "@/components/blog/PostList";
import SearchBar from "@/components/blog/SearchBar";
import { getCategories, getPosts } from "@/lib/api";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ search?: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `Chủ đề: ${category}`,
    description: `Những bài viết âm nhạc thuộc chủ đề ${category}.`,
  };
}

function withSearch(href: string, search?: string) {
  if (!search) return href;
  const params = new URLSearchParams();
  params.set("search", search);
  return `${href}?${params.toString()}`;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category } = await params;
  const { search } = await searchParams;
  const [posts, categories] = await Promise.all([
    getPosts({ category, search }),
    getCategories(),
  ]);

  const selected = categories.find((item) => item.slug === category);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">
          Chủ đề: {selected?.name ?? category}
        </h1>
        <p className="text-slate-700">
          Khám phá các bài viết trong cùng một mạch chủ đề.
        </p>
      </header>

      <SearchBar />

      <div className="flex flex-wrap gap-2">
        <Link
          href={withSearch("/blog", search)}
          className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
        >
          Tất cả bài viết
        </Link>
        {categories.map((item) => (
          <Link
            key={item.id}
            href={withSearch(`/blog/category/${item.slug}`, search)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              item.slug === category
                ? "bg-teal-700 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <PostList posts={posts} />
    </div>
  );
}
