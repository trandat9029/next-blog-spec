# PHASE 2 DOC - A4, A5

## 1) Muc tieu
Tai lieu nay chot pham vi va backlog cho:
- `A4` (Spec muc `7`)
- `A5` (Spec muc `8-9`)

Trang thai: **Planning only, chua code**.

## 2) A4 - Page Implementations (Spec 7)

### 2.1 Pham vi
- `Homepage`: `app/(marketing)/page.tsx`
- `Blog Listing`: `app/blog/page.tsx`
- `Blog Detail`: `app/blog/[slug]/page.tsx`
- `Contact`: `app/(marketing)/contact/page.tsx`

### 2.2 Deliverables
- Page-level contract cho 4 trang:
  - du lieu dau vao
  - component su dung
  - hanh vi loading/empty/error
  - metadata can co
- Luong dieu huong chinh:
  - Home -> Blog list -> Blog detail
  - Header navigation -> About/Contact/Blog
- Rule route params/query:
  - `[slug]` cho chi tiet bai viet
  - `searchParams` cho search/category o blog listing

### 2.3 Backlog A4
1. Chot homepage section structure (`hero`, `latest-posts`) va limit bai viet moi.
2. Chot contract trang `/blog`: danh sach, search, filter theo category, empty state.
3. Chot contract trang `/blog/[slug]`: lay post theo slug, fallback `not-found`.
4. Chot contract trang `/contact`: copy text co dinh + nhung `ContactForm`.
5. Chot route-level UX states:
   - loading skeleton
   - page error fallback
   - empty message
6. Chot tieu chi SEO co ban cho tung page (title/description).

### 2.4 Definition of Done A4
- Co ban mo ta ro cho tung page truoc khi viet code.
- Team biet page nao dung Server logic, page nao chi compose Client component.
- Khong con mo ho ve params/query va dieu kien not-found.

## 3) A5 - API, Data Fetching, Validation (Spec 8-9)

### 3.1 Pham vi
- `lib/api.ts`:
  - `getPosts`
  - `getPostBySlug`
  - `getAllPosts`
  - `getCategories`
- `app/api/contact/route.ts` (POST)
- `lib/validations.ts`:
  - `contactSchema`
  - `commentSchema`

### 3.2 Deliverables
- Data fetching contract:
  - options filter (`limit`, `search`, `category`)
  - output shape typed theo interfaces
- API contract cho `/api/contact`:
  - success response
  - validation error (`400`)
  - unexpected error (`500`)
- Validation contract:
  - thong diep loi nhat quan giua API va form
  - min/max rules theo spec
- Caching/revalidation strategy:
  - quy dinh page nao can `revalidate`
  - quy dinh page nao uu tien SSR/CSR

### 3.3 Backlog A5
1. Chot input/output type cho tat ca ham trong `lib/api.ts`.
2. Chot thu tu filter trong `getPosts`: search -> category -> limit.
3. Chot null contract cho `getPostBySlug` khi slug khong ton tai.
4. Chot logic dedupe category tu posts data.
5. Chot response envelope cho `POST /api/contact` (`success`, `message`, `errors`).
6. Chot mapping validation rule:
   - `name`, `email`, `subject`, `message`
   - `author`, `email`, `content` (comment)
7. Chot quy tac xu ly loi de UI co the show message dung context.
8. Chot diem noi giua form components va API (submit, loading, reset, toast).

### 3.4 Definition of Done A5
- API/data contracts du ro de implement khong phai sua qua lai.
- Validation rules duoc khoa va thong nhat giua FE/BE route.
- Co rule ro cho error handling va cach phan hoi cho UI.

## 4) Thu tu thuc thi de xuat (cho giai doan code sau)
1. Khoa contracts cua A5 truoc (api + validation + data functions).
2. Wire pages A4 vao contracts da khoa.
3. Gan loading/error/empty states o page level.

## 5) Risk can theo doi
- Neu A4 lam truoc khi khoa A5, data flow de bi doi interface.
- Search/filter contract neu khong chot som de gay sai lech URL params.
- Validation message FE va API co the lech nhau neu khong dung chung schema.
