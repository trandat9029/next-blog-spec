# B7 - Deployment, Additional Resources, Final Checklist

## 1) Deployment Guide (Vercel)

### Step 1 - Prepare
1. Dam bao `npm run build` pass local.
2. Co file `.env.example` day du.
3. Khong commit secret keys.

### Step 2 - Push source
1. Push branch `main` len GitHub.
2. Verify commit moi nhat da len remote.

### Step 3 - Deploy on Vercel
1. Import project tu GitHub.
2. Framework detect: Next.js.
3. Set environment variables:
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_URL`
4. Click deploy.

### Step 4 - Verify after deploy
1. Open `/`
2. Open `/blog`
3. Open mot post detail `/blog/[slug]`
4. Submit contact form

## 2) Share for Students

1. Gui deployment URL trong slide/LMS.
2. Gui repo URL kem branch guidance (`starter`, `main` neu co).
3. Dinh kem huong dan chay local:
- `npm install`
- `npm run dev`

## 3) Additional Resources

### Official Docs
1. Next.js App Router
2. React Hook Form
3. Zod
4. Tailwind CSS

### Video topics nen xem them
1. Dynamic routing patterns
2. Server vs client components
3. Production debugging workflow

### Practice project suggestions
1. Todo app with categories
2. Product catalog with dynamic route
3. Mini CMS with markdown posts

## 4) Final Instructor Checklist

### Before class
1. Demo app deploy thanh cong
2. `npm run lint` pass
3. `npm run build` pass
4. Slides + snippets san sang

### During class
1. Terminal visible
2. Browser devtools mo san
3. Follow dung timeline cua B1
4. Co checkpoint cuoi moi module

### After class
1. Push code updates
2. Share recording/materials
3. Post exercises (B2)
4. Tong hop FAQ loi tu B3

## 5) Exit Criteria
1. Hoc vien clone va chay duoc project.
2. Hoc vien hieu route + form + api flow.
3. Hoc vien lam duoc toi thieu 1 bai mo rong tu B4.

