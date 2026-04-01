# B4 - Extended Features & Implementation Priority

## Extended Features (Optional)

1. Authentication
- NextAuth/Auth.js
- protected routes cho dashboard

2. Database integration
- Prisma + PostgreSQL
- migrate schema cho post/comment/contact

3. Rich text editor
- TipTap hoac Lexical cho admin create post

4. Image upload
- upload to S3/Cloudinary
- luu metadata vao DB

5. Comments system
- luu comments persistent
- moderation state (`pending`, `approved`)

6. Analytics
- page view tracking
- top posts by views

7. PWA
- add manifest + service worker

8. i18n
- route theo locale (`/en`, `/vi`)

## Implementation Priority

### P0 - Must Have
1. Core routing (`/`, `/blog`, `/blog/[slug]`, `/contact`)
2. Contact form + validation + API route
3. Blog list/detail rendering on App Router
4. Loading/error/not-found states

### P1 - Should Have
1. Search by query
2. Category route filtering
3. Revalidation + static params for detail pages
4. Parallel comments slot

### P2 - Nice to Have
1. Auth + user profile
2. Persistent comments
3. Admin CMS mini dashboard
4. Advanced SEO (OG image dynamic)

## Suggested Order for Future Sprints

1. Sprint 1
- harden existing P0 (tests + edge case handling)

2. Sprint 2
- finish all P1 items with stable UX

3. Sprint 3
- pick 1-2 items from P2 based on class goals

## Acceptance Signals
- P0: app demo duoc toan bo learning flow.
- P1: app duoc coi la "complete course demo".
- P2: app duoc coi la "production-like expansion".

