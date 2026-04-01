import Link from "next/link";
import PostList from "@/components/blog/PostList";
import SearchBar from "@/components/blog/SearchBar";
import { getCategories, getPosts } from "@/lib/api";

interface BlogPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
}

function buildCategoryHref(category: string, search?: string) {
  if (!search) return `/blog/category/${category}`;
  const params = new URLSearchParams();
  params.set("search", search);
  return `/blog/category/${category}?${params.toString()}`;
}

function buildAllHref(search?: string) {
  if (!search) return "/blog";
  const params = new URLSearchParams();
  params.set("search", search);
  return `/blog?${params.toString()}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { search, category } = await searchParams;
  const [posts, categories] = await Promise.all([
    getPosts({ search, category }),
    getCategories(),
  ]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Blog</h1>
        <p className="text-slate-700">
          Browse all posts. Filter by category and search by keyword.
        </p>
      </header>

      <SearchBar />

      <div className="flex flex-wrap gap-2">
        <Link
          href={buildAllHref(search)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            !category
              ? "bg-teal-700 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All
        </Link>
        {categories.map((item) => (
          <Link
            key={item.id}
            href={buildCategoryHref(item.slug, search)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              category === item.slug
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
