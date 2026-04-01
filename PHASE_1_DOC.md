# PHASE 1 DOC - A1, A2, A3

## 1) Muc tieu
Tai lieu nay chot pham vi va backlog cho 3 phan dau:
- `A1` (Spec muc `1-3`)
- `A2` (Spec muc `4-5`)
- `A3` (Spec muc `6`)

Trang thai: **Planning only, chua code**.

## 2) A1 - Nen tang du an (Spec 1-3)

### 2.1 Pham vi
- Thong tin du an, muc tieu ky thuat, doi tuong su dung.
- Tech stack bat buoc.
- Cau truc thu muc muc tieu.

### 2.2 Deliverables
- Tai lieu "Project Brief" dong bo muc tieu hoc tap va demo.
- Tech stack lock (Next.js, React, TypeScript, Tailwind, RHF, Zod, utilities).
- Skeleton folder map theo spec.
- Quy uoc dat ten va quy uoc to chuc file.

### 2.3 Backlog A1
1. Chot statement du an 1 cau ngan gon.
2. Chot danh sach dependency can cho module dau.
3. Chot so do thu muc cap cao (`app`, `components`, `lib`, `types`, `data`, `public`).
4. Chot naming convention (kebab-case route, PascalCase component, camelCase function).
5. Chot nguyen tac tach Client/Server component o muc tong quan.

### 2.4 Definition of Done A1
- Co tai lieu mo ta ro "du an nay de lam gi".
- Co danh sach package can su dung theo nhom.
- Co tree thu muc muc tieu de team follow.
- Co conventions de tranh sai lech tu dau.

## 3) A2 - Data va Routing Contract (Spec 4-5)

### 3.1 Pham vi
- TypeScript interfaces chinh.
- Cau truc mock data.
- Public routes va API routes.

### 3.2 Deliverables
- Data contract cho `Post`, `Author`, `Category`, `Comment`, `ContactFormData`.
- Quy tac du lieu mock (field bat buoc, format ngay gio, slug).
- Route map public:
  - `/`
  - `/about`
  - `/contact`
  - `/blog`
  - `/blog/[slug]`
  - `/blog/category/[category]`
- Route map API:
  - `POST /api/contact`
  - `GET /api/posts`
  - `GET /api/posts/[slug]`

### 3.3 Backlog A2
1. Chot schema logic cho tung interface (required/optional).
2. Chot quy tac slug uniqueness va category slug.
3. Chot format `publishedAt` theo ISO 8601.
4. Chot mapping giua du lieu mock va man hinh.
5. Chot route responsibility va du lieu vao/ra moi route.
6. Chot danh sach edge case route (slug khong ton tai, category rong, list rong).

### 3.4 Definition of Done A2
- Nhin vao data contract la biet du lieu nao can tren UI.
- Nhin vao route map la biet page/API nao phuc vu use-case nao.
- Co quy tac de viet test manual route/data sau nay.

## 4) A3 - Component Spec va Server/Client Boundary (Spec 6)

### 4.1 Pham vi
- Layout components: `Header`, `Navigation`.
- Blog components: `PostCard`, `PostList`, `SearchBar`.
- Form components: `ContactForm`, `CommentForm`.
- Xac dinh ro component nao Server, component nao Client.

### 4.2 Deliverables
- Component contract cho tung component:
  - muc dich
  - props vao
  - output UI
  - trang thai/loading/error
  - loai component (Server/Client)
- Data flow tong quan:
  - Server lay data -> truyen xuong component hien thi
  - Client xu ly interaction (search, submit form, optimistic update)
- Rule "use client" cho cac component co hooks/event/form lib.

### 4.3 Backlog A3
1. Chot danh sach props toi thieu cho tung component.
2. Chot trach nhiem tung component de tranh trung lap logic.
3. Chot boundary:
   - `PostList`: Server
   - `PostCard`, `SearchBar`, `ContactForm`, `CommentForm`, `Navigation`, `Header`: Client
4. Chot behavior chi tiet:
   - `SearchBar`: realtime + URL params + debounce
   - `ContactForm`: RHF + Zod + loading + toast + reset
   - `CommentForm`: validation don gian + optimistic update
5. Chot empty/loading/error states cho component list va form.

### 4.4 Definition of Done A3
- Moi component co contract ro rang truoc khi code.
- Khong con mo ho ve viec dat `use client` o dau.
- Co data flow de sang A4 code page/API khong bi tac.

## 5) Thu tu trien khai de xuat (A1 -> A2 -> A3)
1. Hoan tat A1 de khoa nen tang.
2. Hoan tat A2 de khoa contract du lieu va route.
3. Hoan tat A3 de khoa contract component.

## 6) Risk can theo doi
- Spec co mot so phan bi lap/noi dung chen nhau o cac trang sau.
- Neu A2 chua khoa slug/data rule som, A3 de bi thay doi qua lai.
- Neu boundary Server/Client khong khoa som, A4 de loi hydration.
