# B2 - Exercises & Solutions

Muc tieu: bo bai tap theo tung module de hoc vien tu lam, co tieu chi tu danh gia nhanh.

## Module 1 Exercises

### Exercise 1.1 - Setup project
Yeu cau:
1. Chay duoc app bang `npm run dev`.
2. Doi title va subtitle o homepage.
3. Cap nhat site name thong qua `.env.local`.

Done khi:
- Trang `/` hien thi noi dung moi.
- Header lay ten site tu env constants.

### Exercise 1.2 - Header + Navigation
Yeu cau:
1. Them 1 item menu moi (vi du: `Docs`).
2. Highlight active state dung.
3. Khong vo layout tren mobile.

Done khi:
- Route moi truy cap duoc.
- Active state chinh xac.

### Exercise 1.3 - Post card UI
Yeu cau:
1. Them tag list vao `PostCard`.
2. Them hover state cho title va card.
3. Hien thi ngay publish dung format.

Done khi:
- Card dep tren desktop va mobile.
- Khong loi type.

## Module 2 Exercises

### Exercise 2.1 - Routing
Yeu cau:
1. Them route `app/blog/category/[category]/page.tsx` (neu chua co).
2. Tu `/blog`, click category vao dung route category.
3. Xu ly category khong ton tai bang empty state.

Done khi:
- Link category hop le.
- Khong bi crash voi category la.

### Exercise 2.2 - Contact form validation
Yeu cau:
1. Them field `phone` vao form va schema.
2. Validate phone pattern.
3. Bao loi o UI neu phone sai format.

Done khi:
- Submit payload dung schema.
- API tra 400 khi input sai.

## Module 3 Exercises

### Exercise 3.1 - Data fetching
Yeu cau:
1. Them support sort (`newest`, `oldest`) cho `getPosts`.
2. Gan sort vao URL search params.
3. Render dung thu tu tren `/blog`.

Done khi:
- URL co `?sort=...`.
- Reload trang van giu trang thai sort.

### Exercise 3.2 - Parallel route comments
Yeu cau:
1. O `@comments/default.tsx`, render danh sach comment mock.
2. Sau submit `CommentForm`, append comment moi (optimistic UI).
3. Co loading state khi submit.

Done khi:
- Slot comments hoat dong doc lap voi content post.
- Khong anh huong render cua main post.

## Solution Guide ngan

1. Neu loi hydration:
- Kiem tra component interactive co `"use client"` chua.

2. Neu loi route:
- Kiem tra ten folder dynamic (`[slug]`, `[category]`).

3. Neu loi form:
- Kiem tra schema trong `lib/validations.ts`.
- Kiem tra `zodResolver(...)` trong form component.

## Cach cham nhanh
- 40%: dung logic
- 30%: dung type va validation
- 20%: UI/UX
- 10%: readability (tach component, naming ro rang)

