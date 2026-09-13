# TanStack Start & Router Project

A modern, full-stack React web application built with **TanStack Start**, **TanStack Router**, **React 19**, **Tailwind CSS v4**, and **Vite**. This project demonstrates type-safe file-based routing, server data loaders, dynamic nested layouts, component state management, and modern developer tooling.

---

## 🚀 Features

- **⚡ TanStack Start**: Modern full-stack framework with SSR capabilities and seamless Vite integration.
- **🗺️ Type-Safe File-Based Routing**: TanStack Router automatically generates route trees with strict type-safety.
- **🧬 Dynamic & Nested Routes**:
  - Root layout with TanStack DevTools integration.
  - Dashboard layout with nested routes (`/dashboard`, `/dashboard/skills`, `/dashboard/settings`).
  - Dynamic skill detail pages (`/skills/$skillId`, `/skills/new`).
  - Multi-segment dynamic parameters (`/users/$username/skills/$skillId`).
- **📡 Data Fetching & Loader Pattern**: Async data loading with pending states (`pendingComponent`), 404 handlers (`notFoundComponent`), and error boundaries with router invalidation retries.
- **🎨 Tailwind CSS v4**: Next-generation utility-first styling with `@tailwindcss/vite`.
- **✨ Interactive UI Components**:
  - `SkillCard`: Interactive card with like toggle animation and Lucide icons.
- **⚡ React 19 & React Compiler**: Powered by React 19 with Babel React Compiler preset.
- **🛠️ Code Quality with Biome**: Fast formatting and linting.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| [**TanStack Start**](https://tanstack.com/start) | Full-stack React framework & SSR |
| [**TanStack Router**](https://tanstack.com/router) | Type-safe client & server file-based routing |
| [**React 19**](https://react.dev/) | Core UI library |
| [**Tailwind CSS v4**](https://tailwindcss.com/) | Modern utility-first CSS styling |
| [**Vite**](https://vitejs.dev/) | Next-generation frontend build tool |
| [**Biome**](https://biomejs.dev/) | Toolchain for formatting and linting |
| [**Lucide React**](https://lucide.dev/) | Lightweight modern icon set |
| [**TypeScript**](https://www.typescriptlang.org/) | Static type-checking |

---

## 📁 Project Structure

```text
tanstack-proj/
├── src/
│   ├── components/            # Reusable UI components
│   │   └── SkillCard.tsx      # Interactive skill card component
│   ├── routes/                # File-based routing structure
│   │   ├── __root.tsx         # Root document & DevTools shell layout
│   │   ├── index.tsx          # Home page route (/) with data loader
│   │   ├── contact.tsx        # Contact page (/contact)
│   │   ├── dashboard/         # Dashboard layout & nested routes
│   │   │   ├── route.tsx      # Dashboard layout wrapper with <Outlet />
│   │   │   ├── index.tsx      # /dashboard home
│   │   │   ├── settings.tsx   # /dashboard/settings
│   │   │   └── skills.tsx     # /dashboard/skills
│   │   ├── skills/            # Skills routes
│   │   │   ├── index.tsx      # /skills
│   │   │   ├── new.tsx        # /skills/new
│   │   │   └── $skillId.tsx   # Dynamic route (/skills/:skillId)
│   │   └── users/             # Nested user routes
│   │       └── $username/
│   │           └── skills/
│   │               └── $skillId.tsx # /users/:username/skills/:skillId
│   ├── routeTree.gen.ts       # Generated type-safe route tree
│   ├── router.tsx             # TanStack Router instance configuration
│   └── styles.css             # Global CSS & Tailwind imports
├── biome.json                 # Biome lint/format config
├── tsr.config.json            # TanStack Router generator config
├── vite.config.ts             # Vite configuration with plugins
└── package.json               # Project dependencies and scripts
```

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
cd tanstack-proj
npm install
```

### Running the Development Server

Start the Vite development server with hot-module reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server on port 3000 |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run generate-routes` | Manually generates the TanStack Router route tree (`tsr generate`) |
| `npm run lint` | Runs Biome linter to detect code issues |
| `npm run format` | Formats code according to Biome configuration |
| `npm run check` | Runs both linting and formatting verification |

---

## 🛣️ Routing Architecture

This project utilizes [TanStack Router](https://tanstack.com/router) file-based routing:

1. **Adding Routes**: Place any `.tsx` file inside `src/routes/` and TanStack Router will automatically update `routeTree.gen.ts`.
2. **Dynamic Params**: Prepend `$` to route file/folder names (e.g. `$skillId.tsx` or `$username/`). Access params in components via:
   ```tsx
   const { skillId } = Route.useParams()
   ```
3. **Nested Layouts**: Use `route.tsx` inside a route directory to render shared UI around child routes via `<Outlet />`.
4. **Navigation**: Use the type-safe `<Link>` component:
   ```tsx
   import { Link } from '@tanstack/react-router'

   <Link to="/skills/$skillId" params={{ skillId: 'react' }}>
     View React Skill
   </Link>
   ```

---

## 🔍 DevTools

The application includes TanStack DevTools configured in `src/routes/__root.tsx`. Look for the floating tool panel in the bottom-right corner during development to inspect router state, match histories, and loaders.
