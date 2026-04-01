import Link from "next/link";

interface CategoryBadgeProps {
  label: string;
  slug: string;
}

export default function CategoryBadge({ label, slug }: CategoryBadgeProps) {
  return (
    <Link
      href={`/blog?category=${slug}`}
      className="inline-flex rounded-full bg-teal-100 px-2.5 py-1 text-xs font-medium text-teal-800 hover:bg-teal-200"
    >
      {label}
    </Link>
  );
}

