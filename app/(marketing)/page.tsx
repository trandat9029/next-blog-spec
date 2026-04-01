import PostList from "@/components/blog/PostList";
import { getPosts } from "@/lib/api";

export default async function HomePage() {
  const posts = await getPosts({ limit: 6 });

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-[linear-gradient(135deg,#134e4a,#0f766e_35%,#2dd4bf)] px-6 py-12 text-white sm:px-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-teal-50/90">
          Next.js Learning Sandbox
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Build a real blog with App Router, typed APIs, and validated forms.
        </h1>
        <p className="mt-4 max-w-2xl text-teal-50/95">
          This project demonstrates routing, server/client boundaries, data
          fetching, and form workflows end to end.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-slate-900">Latest posts</h2>
        <PostList posts={posts} />
      </section>
    </div>
  );
}

