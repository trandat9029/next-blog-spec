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
      { success: false, message: "Không tìm thấy bài viết" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, data: post });
}

