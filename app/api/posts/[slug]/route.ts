import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/api";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return NextResponse.json(
      { success: false, message: "Post not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, data: post });
}

