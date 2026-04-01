# B5 - Git Workflow for Teaching

## 1) Commit Strategy (Progressive Learning)

Nguyen tac:
- Moi commit gom 1 y ro rang.
- Message theo conventional style (`feat`, `fix`, `docs`, `refactor`).
- Hoc vien co the `git show` de hoc tung buoc.

Mau commit sequence:
1. `feat: scaffold Next.js app router project`
2. `feat: add layout, navigation, and footer`
3. `feat: implement blog list and detail routes`
4. `feat: add contact form with zod validation`
5. `feat: add API routes for contact and posts`
6. `feat: add loading, error, and not-found states`
7. `feat: add category route and search params flow`

## 2) Branch Strategy

De xuat branch:
- `main`: branch chuan demo chay on dinh.
- `starter`: branch giao hoc vien (thieu mot so tinh nang de lam bai).
- `module-1-basics`
- `module-2-routing-forms`
- `module-3-advanced`

## 3) Teaching Flow voi Git

Buoc tren lop:
1. Checkout `starter`.
2. Hoc vien code theo buoi.
3. Giang vien so sanh voi `main` bang:
- `git log --oneline`
- `git show <commit>`
- `git diff starter..main -- <path>`

## 4) Pull Request Rules (neu day theo team)

1. Branch naming:
- `feat/<short-name>`
- `fix/<short-name>`
- `docs/<short-name>`

2. PR checklist:
- build pass
- lint pass
- co mo ta thay doi
- co screenshot neu doi UI

## 5) Recovery Commands nhanh

1. Xem file da sua:
- `git status`

2. Xem diff:
- `git diff`

3. Bo stage:
- `git restore --staged <file>`

4. Luu tam WIP:
- `git stash push -m "wip"`
- `git stash pop`

## 6) Rule cho hoc vien

1. Commit nho, commit som.
2. Khong commit `.env.local`.
3. Luon pull moi nhat truoc khi code tiep.
4. Neu conflict, giai quyet tren branch cua minh truoc khi merge.

