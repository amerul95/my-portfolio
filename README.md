# Muhammad Amerul - Professional Portfolio

This is the repository for my professional portfolio, showcasing my experience and projects as a Fullstack Developer. It's built to be high-performance, responsive, and visually appealing, utilizing modern web technologies.

## 🚀 Tech Stack

The portfolio is built with the following core technologies:
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives + custom design system
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Features

- **Modern & Clean UI:** A dark/light theme supporting sleek interface designed for high readability.
- **Dynamic Animations:** Smooth scroll reveals and micro-interactions powered by Framer Motion.
- **Component-Driven Architecture:** Highly modular and maintainable internal structure.
- **SEO Optimized:** Metadata, semantic HTML, and proper headings.
- **Fully Responsive:** Beautifully adapts from mobile devices up to large desktop screens.

## 🛠️ Getting Started

First, clone the repository to your local machine:
```bash
git clone https://github.com/amerul95/my-portfolio.git
cd my-portfolio
```

Install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying components in `app/page.tsx` or updating your data in `data/portfolio.ts`.

## 📂 Project Structure

- `app/` - Next.js App Router layout and pages.
- `components/` 
  - `layout/` - Global structure components (Navbar, Footer).
  - `sections/` - Main page content blocks (Hero, About, Projects, etc.).
  - `ui/` - Reusable base UI components (Buttons, Cards, Badges).
- `data/` - Hardcoded JSON-like typescript data (`portfolio.ts`) that feeds the sections.
- `public/` - Static assets like images and icons.

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
