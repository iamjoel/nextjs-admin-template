# Next.js Admin Template
<p align="center">
  <a href="./README_CN.md">简体中文</a>
</p>

## Feature
* UI [Shadcn](https://ui.shadcn.com/docs)
* [Tailwind CSS](https://tailwindcss.com/docs/margin)
* Layout
  * Common layout: Sidebar + content
  * Not use common layout: Login page
* Language.
  * Now refresh page would flash when current is not english(default language).
* Context


Code Reference: [next-shadcn-dashboard-starter Github](https://github.com/Kiranism/next-shadcn-dashboard-starter); [Demo](https://next-shadcn-dashboard-starter.vercel.app/)

## File Structure
* app: all pages.
  * (adminLayout): after login page, it has sidebar menu.
  * login: login page.
* components: all components.
* i18n: language files.
* context: share data between components.
* lib: utils.

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
