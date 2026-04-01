export default function BlogDetailLayout({
  children,
  comments,
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      <div>{children}</div>
      <aside>{comments}</aside>
    </div>
  );
}

