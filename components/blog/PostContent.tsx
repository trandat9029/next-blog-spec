interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-700">
      {content}
    </div>
  );
}

