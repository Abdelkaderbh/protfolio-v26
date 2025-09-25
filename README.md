<div align="center">

# 🌐 Portfolio v26

Modern, animated, and performance‑focused developer portfolio built with Next.js 15 (App Router + Turbopack), React 19, Tailwind CSS 4, and tasteful UI/interaction components. Includes a production‑ready contact form powered by Resend + Nodemailer style logic (currently simplified to Resend) and a clean project showcase data layer.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![React](https://img.shields.io/badge/React-19-149eca?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript) ![Tailwind_CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/License-MIT-green)

</div>

## ✨ Overview

This repository contains my personal portfolio (iteration 26) showcasing projects, services, and ways to get in touch. It emphasizes:

- Fast initial load (App Router + streaming)
- Reusable UI primitives (Radix + custom components)
- Motion + subtle micro‑interactions
- Accessible, semantic markup
- Simple data-driven project listing (`data/projects.ts`)
- Configurable email contact endpoint (`/api/contact`)

## 🚀 Features

- Next.js 15 App Router with Turbopack dev/build scripts
- React 19 concurrent-ready components
- Tailwind CSS 4 + `tailwind-merge` + utility helpers (`cn`)
- Animated hero, interactive pins, text flip + hover effects
- Centralized project metadata for easy expansion
- API route for contact form submissions using Resend
- Basic input validation + HTML + plain‑text email generation
- TypeScript throughout
- Clean component architecture in `components/` & `components/ui/`

## 🧩 Tech Stack

| Layer         | Tools                                           |
| ------------- | ----------------------------------------------- |
| Framework     | Next.js 15 (App Router)                         |
| Language      | TypeScript 5 + React 19                         |
| Styling       | Tailwind CSS 4, custom utility `cn()`           |
| UI Primitives | Radix UI Label, custom effects components       |
| Icons         | Lucide React, Tabler Icons                      |
| Email         | Resend API (`resend` npm package)               |
| Animations    | `motion` (Framer Motion successor / Motion One) |

## 🗂️ Folder Structure (excerpt)

```
app/              # App Router entrypoints & API routes
	api/contact/    # POST handler for contact form (Resend email)
	page.tsx        # Landing page composition
components/       # High-level sections (Hero, About, Projects...)
components/ui/    # Reusable visual & interaction components
data/projects.ts  # Project listing data source
lib/utils.ts      # Utility (cn class merge helper)
public/           # Static assets (SVGs, images, documents)
src/images/       # Image assets (consider moving to public if needed)
```

## 🔐 Environment Variables

Create a `.env.local` file at the project root and add:

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO=your_destination_email@example.com   # Optional (defaults to hardcoded address)
RESEND_FROM="Portfolio Contact <onboarding@resend.dev>"  # Replace after domain verification
```

Notes:

- `RESEND_API_KEY` must be a valid Resend key.
- Update `CONTACT_TO` & `RESEND_FROM` to verified domains for production.
- Never commit `.env.local`.

## 📮 Contact API

`POST /api/contact`
Payload JSON:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Project Inquiry",
  "message": "Hi, let's collaborate!"
}
```

Responses:

- 200 `{ success: true, message: "Your message has been sent!" }`
- 400 / 422 validation errors
- 502 email provider failure
- 500 server error

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Run development server (Turbopack):

```bash
npm run dev
```

Visit: http://localhost:3000

Build (Turbopack):

```bash
npm run build
```

Start production server:

```bash
npm start
```

Lint:

```bash
npm run lint
```

## 🧪 Testing & Quality

No formal tests yet—potential future improvements:

- Add Playwright or Cypress for visual/regression
- Unit test utility functions & API route logic

## 🧱 Components Highlight

- `Hero`, `About`, `Projects`, `Services`, `Contact`, `Navbar`, `Footer`
- UI effects (`floating-dock`, `flip-words`, `background-beams`, etc.) add personality without heavy bundles
- `projects.ts` drives the Projects section—just append objects to add more

## 📦 Notable Dependencies

- `resend` – transactional email
- `nodemailer` – included if fallback is desired later (currently unused in code path)
- `motion` – animation/motion primitives
- `tailwind-merge` – smart class merging
- `clsx` – conditional classnames

## 🔄 Adding a New Project

Edit `data/projects.ts` and push a new object:

```ts
{
	title: "My New App",
	description: "Short summary...",
	href: "https://github.com/username/repo",
	gradient: "from-indigo-500 via-sky-500 to-cyan-500"
}
```

## 🌐 Deployment

Best deployed on Vercel:

1. Push repo to GitHub
2. Import into Vercel dashboard
3. Add Environment Variables under Project Settings
4. Trigger production build

Alternative: Docker / custom Node hosting (ensure `npm run build` then `npm start`).

## ⚙️ Performance / SEO Ideas

- Add Open Graph + Twitter meta tags in `app/layout.tsx`
- Implement image optimization via `next/image`
- Consider `robots.txt` / `sitemap.xml`
- Use `dynamic = "force-static"` where appropriate for static export of stable sections

## 🛡️ Security Notes

- Email endpoint validates required fields & basic email pattern
- Consider adding rate limiting (e.g., with edge middleware) for production
- Sanitize/escape user content (HTML escaping already applied to message body)

## 🤝 Contributing

While this is a personal portfolio, suggestions & PRs for improvements (accessibility, performance, DX) are welcome.

## 📄 License

MIT License – feel free to fork and adapt (credit appreciated but not required).

## 👤 Author / Contact

Abdelkader Ben Hassan

- Email: (via contact form or update here)
- LinkedIn / GitHub: Add links if desired

If you found this helpful, consider starring ⭐ the repository.

---

Made with passion, caffeine, and modern web tooling.
