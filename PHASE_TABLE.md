# PHASE TABLE

| ID | Scope | Spec Ref | Output Chinh | Dependency | Priority | Status |
|---|---|---|---|---|---|---|
| A1 | Nen tang du an | 1, 2, 3 | Project brief, tech stack lock, folder map, conventions | None | P0 | Done (Planning) |
| A2 | Data + Routing contract | 4, 5 | Interface contract, mock data rules, public/API route map | A1 | P0 | Done (Planning) |
| A3 | Component spec + boundary | 6 | Component contracts, Server/Client boundary, data flow | A2 | P0 | Done (Planning) |
| A4 | Page implementations | 7 | Home, Blog list/detail, Contact pages | A3 | P0 | Done (Planning) |
| A5 | API + Fetching + Validation | 8, 9 | API layer + validation flow | A2, A3 | P0 | Done (Planning) |
| A6 | Styling + Config + Feature checklist | 10, 11, 12, 13 | Styling baseline, env/config setup, phase checklist | A1, A3 | P1 | Pending |

## Milestone hien tai
- Da hoan tat phase planning cho `A1-A5`.
- Chua code.
- San sang chuyen sang implementation khi ban xac nhan.
