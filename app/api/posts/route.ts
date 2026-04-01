import { NextResponse } from "next/server";
import { getPosts } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get("search") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const limitValue = searchParams.get("limit");
  const parsedLimit = limitValue ? Number.parseInt(limitValue, 10) : undefined;
  const limit = Number.isFinite(parsedLimit) ? parsedLimit : undefined;

  const posts = await getPosts({ search, category, limit });
  return NextResponse.json({ success: true, data: posts });
}

