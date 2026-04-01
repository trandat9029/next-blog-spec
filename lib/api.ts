import postsData from "@/data/posts.json";
import type { Category, GetPostsOptions, Post } from "@/types";

const posts = postsData as Post[];

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPosts(options: GetPostsOptions = {}): Promise<Post[]> {
  await wait(200);

  let result = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  if (options.search) {
    const keyword = options.search.trim().toLowerCase();
    if (keyword) {
      result = result.filter((post) => {
        return (
          post.title.toLowerCase().includes(keyword) ||
          post.excerpt.toLowerCase().includes(keyword) ||
          post.tags.some((tag) => tag.toLowerCase().includes(keyword))
        );
      });
    }
  }

  if (options.category) {
    result = result.filter((post) => post.category.slug === options.category);
  }

  if (options.limit && options.limit > 0) {
    result = result.slice(0, options.limit);
  }

  return result;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await wait(120);
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getAllPosts(): Promise<Post[]> {
  await wait(100);
  return [...posts];
}

export async function getCategories(): Promise<Category[]> {
  await wait(80);

  const map = new Map<string, Category>();
  for (const post of posts) {
    map.set(post.category.slug, post.category);
  }

  return Array.from(map.values());
}

