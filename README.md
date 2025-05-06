# 💰 WealthSync – Your Personal Finance Companion

![WealthSync Banner](https://user-images.githubusercontent.com/your-banner-image.png)

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-13-blue?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Prisma-ORM-green?style=for-the-badge&logo=prisma" />
  <img src="https://img.shields.io/badge/Clerk-Auth-orange?style=for-the-badge&logo=clerk" />
  <img src="https://img.shields.io/badge/TypeScript-TypeSafe-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" />
</div>

---

## 📌 About WealthSync

**WealthSync** is a full-stack personal finance management app that helps users **track expenses, manage budgets, and visualize financial goals** with powerful charts and analytics — all secured with **Clerk Authentication** and backed by **Prisma ORM** and a scalable **PostgreSQL** database.

> “Don’t manage money with spreadsheets. Sync it, track it, and grow it with WealthSync.”

---

## 🧰 Tech Stack

| Frontend | Backend | Auth | ORM & DB | UI | Hosting |
|----------|---------|------|----------|----|---------|
| Next.js 13 (App Router) | Node.js | Clerk | Prisma + PostgreSQL | Tailwind CSS | Vercel / Render |

---

## 🧠 Features

- 🔐 **User Auth with Clerk** – Secure sign in/out with OAuth support.
- 📊 **Track Incomes & Expenses** – Add, edit, delete transactions with category tagging.
- 📅 **Monthly Budget Goals** – Create financial goals and visualize progress.
- 📈 **Analytics Dashboard** – Dynamic charts with income vs expense comparison.
- ☁️ **Deployed & Scalable** – Ready for production with PostgreSQL & Vercel.

---

## 🔧 Project Setup

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/wealthsync.git
cd wealthsync

npm install
# or
yarn install


DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

4. Setup Prisma
npx prisma generate
npx prisma migrate dev --name init
