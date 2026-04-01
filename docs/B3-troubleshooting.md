# B3 - Common Errors & Troubleshooting

## 1) Setup & Configuration

### Error: module alias `@/...` khong resolve
Nguyen nhan:
- `tsconfig.json` chua co `paths`.

Xu ly:
1. Check `tsconfig.json`:
- `"paths": { "@/*": ["./*"] }`
2. Restart TS server / restart dev server.

### Error: cannot find package
Nguyen nhan:
- Thieu dependency.

Xu ly:
1. Chay `npm install`.
2. Check `package.json` da co package can thiet.

## 2) Routing

### Error: 404 voi dynamic route
Nguyen nhan:
- Sai ten folder `[slug]`.
- Sai Link href.

Xu ly:
1. Verify path: `app/blog/[slug]/page.tsx`.
2. Verify Link: `/blog/${post.slug}`.

### Error: category route khong hoat dong
Nguyen nhan:
- Chua tao `app/blog/category/[category]/page.tsx`.
- Sai slug category.

Xu ly:
1. Check file route co ton tai.
2. Check `getPosts({ category })` co filter dung.

## 3) Data Fetching

### Error: khong hien bai viet
Nguyen nhan:
- `data/posts.json` sai schema.
- `getPosts` filter loai het data.

Xu ly:
1. Kiem tra field bat buoc: `id`, `title`, `slug`, `category`, `publishedAt`.
2. Log options search/category de debug.

### Error: page detail bi not-found du slug dung
Nguyen nhan:
- `getPostBySlug` tra `null` do slug mismatch.

Xu ly:
1. Compare slug URL va slug trong JSON.
2. Confirm khong co whitespace/upper-case bat thuong.

## 4) Form & Validation

### Error: submit khong chay
Nguyen nhan:
- Form component khong co `"use client"`.
- Handler khong gan `handleSubmit`.

Xu ly:
1. Add `"use client"` dau file form.
2. Check `onSubmit={handleSubmit(onSubmit)}`.

### Error: validation khong hien
Nguyen nhan:
- Chua gan `zodResolver`.
- Display error message sai key.

Xu ly:
1. Check `resolver: zodResolver(contactSchema)`.
2. Check `{errors.field?.message}` o UI.

## 5) Build & Deploy

### Error: build fail do TypeScript
Xu ly:
1. Chay `npm run lint`.
2. Chay `npm run build`.
3. Fix tung type error theo file.

### Error: env undefined o production
Xu ly:
1. Tao `.env.local` cho local.
2. Set env tren Vercel dashboard cho production.

## 6) Performance

### Van de: search lag
Xu ly:
1. Dung debounce (da co trong `SearchBar`).
2. Tranh update URL lien tuc moi key stroke.

### Van de: qua nhieu re-render
Xu ly:
1. Tranh dat state update trong loop.
2. Chia component ro server/client boundary.

## 7) Debug Checklist nhanh
1. Co loi console khong?
2. Route path co dung folder convention khong?
3. Component interactive co `"use client"` khong?
4. Schema va payload co khop khong?
5. `npm run lint` va `npm run build` pass chua?

