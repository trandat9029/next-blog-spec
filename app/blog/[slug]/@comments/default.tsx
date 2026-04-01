import CommentForm from "@/components/forms/CommentForm";

interface CommentsSlotProps {
  params: Promise<{ slug: string }>;
}

export default async function CommentsSlot({ params }: CommentsSlotProps) {
  const { slug } = await params;
  return <CommentForm postId={slug} />;
}

