import type { Post } from "@/types";
import PostCard from "@/components/blog/PostCard";

interface PostListProps {
  posts: Post[];
}

export default async function PostList({ posts }: PostListProps) {
  if (!posts.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
        Không có bài viết phù hợp với bộ lọc này.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

