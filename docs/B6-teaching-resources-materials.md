# B6 - Teaching Resources & Materials

## 1) Slide Deck Outline

### Module 1
1. Next.js la gi?
2. App Router mindset
3. Folder structure va conventions
4. Styling strategy

### Module 2
1. File-based routing
2. Dynamic routes
3. Server vs client components
4. Form + validation flow

### Module 3
1. Data fetching patterns
2. Error/loading UX
3. Revalidation + static params
4. Parallel routes

## 2) Demo Scenarios

1. Scenario A - Image & card rendering
- Open home
- Inspect `PostCard` and image behavior

2. Scenario B - Routing depth
- Navigate `/blog` -> `/blog/[slug]` -> `/blog/category/[category]`

3. Scenario C - Validation behavior
- Submit contact form sai du lieu
- Quan sat message o UI + response API

4. Scenario D - Error and loading
- Trigger loading route
- Trigger 404 not-found

## 3) Code Snippet Library

De xuat snippets:
1. `snippets/dynamic-route.tsx`
2. `snippets/contact-form.tsx`
3. `snippets/api-route.ts`
4. `snippets/search-params.tsx`
5. `snippets/generate-static-params.ts`

Muc dich:
- hoc vien copy nhanh skeleton
- tap trung vao logic thay vi boilerplate

## 4) Quick Reference Cards

Card 1 - Server vs Client
- khi nao can `"use client"`
- anti-pattern can tranh

Card 2 - Routing Cheat Sheet
- static route
- dynamic route
- nested route
- parallel route

Card 3 - Validation Flow
- input -> schema -> error message -> API response

Card 4 - Debug Flow
- lint -> build -> route -> schema -> state

## 5) Assessment Checklist

1. Hoc vien tao duoc route dynamic dung
2. Hoc vien xu ly duoc validation o UI
3. Hoc vien hieu `notFound()` va error boundary
4. Hoc vien doc va sua duoc `lib/api.ts`
5. Hoc vien push code len git theo commit nho

## 6) Tai lieu can chuan bi truoc buoi hoc

1. Repo URL + branch starter
2. Slide PDF
3. Link docs quan trong:
- Next.js docs
- React Hook Form docs
- Zod docs

