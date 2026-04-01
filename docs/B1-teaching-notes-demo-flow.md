# B1 - Teaching Notes & Demo Flow

Muc tieu: dung app hien tai de giang day theo format 3 module, tong 12 gio.

## Module 1 - Co ban Next.js (4 gio)

### Buoi 1.1 - Gioi thieu va setup (1.5h)
1. Gioi thieu Next.js vs React
- Trinh bay ly do dung framework thay vi chi dung React thuong.
- Nhan manh built-in routing, SSR/SSG, image optimization.

2. Demo tao project
- Show `package.json`, `tsconfig.json`, `app/layout.tsx`.
- Giai thich alias `@/*` va app router structure.

3. Demo app structure
- Di qua `app/`, `components/`, `lib/`, `types/`, `data/`.
- Show vai tro cua server component va client component.

### Buoi 1.2 - Image & styling (1h)
1. Demo `next/image`
- Xem `components/blog/PostCard.tsx`.
- Giai thich `fill`, `sizes`, toi uu hinh anh.

2. Demo global styling
- Xem `app/globals.css`.
- Giai thich token mau, base layer, component layer.

### Buoi 1.3 - Hands-on (1.5h)
- Hoc vien doi text hero, doi color theme, doi logo trong header.
- Review nhanh theo nhom:
  - hieu route map
  - hieu component tree
  - hieu file nao la entry cua page

## Module 2 - Routing & Forms (4 gio)

### Buoi 2.1 - Routing (1.5h)
1. File-based routing
- `/`, `/blog`, `/blog/[slug]`, `/contact`, `/about`.

2. Dynamic route
- Phan tich `app/blog/[slug]/page.tsx`.
- Giai thich `params`, `notFound`, `generateMetadata`.

3. Nested route theo category
- Phan tich `app/blog/category/[category]/page.tsx`.
- So sanh luong data voi trang `/blog`.

### Buoi 2.2 - Forms & validation (1.5h)
1. Contact form
- File: `components/forms/ContactForm.tsx`.
- Giai thich React Hook Form + Zod resolver.

2. API contact
- File: `app/api/contact/route.ts`.
- Giai thich luong:
  - parse body
  - validate schema
  - tra response 200 / 400 / 500

### Buoi 2.3 - Hands-on (1h)
- Bai tap nhanh:
  - them field moi cho contact form
  - cap nhat schema va show loi dung o UI

## Module 3 - Data Fetching & Advanced (4 gio)

### Buoi 3.1 - Data fetching (1.5h)
1. `lib/api.ts` contract
- `getPosts`, `getPostBySlug`, `getCategories`, `getAllPosts`.
- Thu tu filter: search -> category -> limit.

2. SSR va SSG
- SSR behavior cua `/blog`.
- SSG + revalidate cua `/blog/[slug]`.

### Buoi 3.2 - Advanced routing (1.5h)
1. Parallel route
- Files:
  - `app/blog/[slug]/layout.tsx`
  - `app/blog/[slug]/@comments/default.tsx`

2. Loading/error states
- Files:
  - `app/loading.tsx`, `app/error.tsx`
  - `app/blog/loading.tsx`, `app/blog/error.tsx`

### Buoi 3.3 - Tong ket (1h)
- Demo end-to-end:
  - tim post
  - vao chi tiet
  - gui contact form
  - test category route
- Q&A va giao bai tap ve nha.

## Teaching Notes nhanh
- Luon chay live `npm run dev` trong gio.
- Mo song song terminal + browser devtools.
- Neu hoc vien gap loi:
  - check type truoc
  - check route path
  - check `use client` o component interactive

