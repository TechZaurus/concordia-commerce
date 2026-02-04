# Concordia Commerce

An Nx monorepo for Concordia Commerce, featuring a Next.js frontend, Flask backend, and shared packages.

## 🏗️ Monorepo Structure

```
concordia-commerce/
├── apps/
│   ├── frontend/         # Next.js 16 application
│   └── backend/          # Flask backend with gRPC (mock)
├── packages/
│   ├── protos/           # Shared Protocol Buffer definitions
│   └── ui/               # Custom component library (placeholder)
├── docs/                 # Documentation
└── nx.json               # Nx workspace configuration
```

## 🚀 Tech Stack

### Frontend (`apps/frontend`)

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) with React 19
- **Language:** TypeScript (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **State Management:**
  - Database: [RxDB](https://rxdb.info/) (Local-first reactive database with key compression)
  - Client/UI: [Zustand](https://docs.pmnd.rs/zustand)
- **Code Quality:** Prettier + Husky + lint-staged
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Mocking:** [MSW (Mock Service Worker)](https://mswjs.io/)
- **Real-time:** Native WebSockets

### Backend (`apps/backend`)

- **Framework:** [Flask](https://flask.palletsprojects.com/)
- **Protocol:** gRPC (planned) + REST API (current mock)
- **Language:** Python 3.x
- **Status:** Mock implementation, full gRPC services coming soon

### Monorepo Tools

- **Build System:** [Nx](https://nx.dev/)
- **Package Manager:** [Bun](https://bun.sh/) (with workspaces)

## 📂 Frontend Architecture

The frontend follows a Feature-Sliced Design inspired architecture:

```
apps/frontend/src/
├── app/                  # Next.js App Router pages and layouts
├── features/             # Business features (e.g., dashboard, auth, products)
│   └── dashboard/        # Dashboard feature
│       ├── components/   # Feature-specific components
│       └── index.ts      # Feature index file
├── shared/               # Shared code (UI kit, utils, hooks)
│   ├── config/           # Global configuration (i18n, etc.)
│   ├── hooks/            # Shared hooks (useWebSocket, etc.)
│   ├── lib/              # Library configurations (query-client, etc.)
│   ├── store/            # Global UI state (Zustand)
│   ├── types/            # Shared types
│   └── ui/               # Abstraction layer over HeroUI (Design System)
└── mocks/                # MSW handlers and browser worker
```

## 🛠️ UI Abstraction Layer

I'm implementing a strict abstraction layer over HeroUI components in `src/shared/ui`. Always import UI components from `@/shared/ui`, not directly from `@heroui/react` in feature code. This allows me to replace the underlying UI library in the future if needed.

## 🌍 Internationalization (i18n)

Supported languages:

- English (en) - Default
- Serbian (sr)

Translations are located in `public/locales/{lang}/{ns}.json`.

## 🗄️ Local-First Architecture

This project uses a **local-first** approach with RxDB:

- **Offline-first**: Data is stored locally in IndexedDB with key compression (~40% size reduction)
- **Reactive**: UI automatically updates when data changes via RxDB subscriptions
- **Fast**: Instant reads from local storage, background sync with API
- **Resilient**: Works offline, syncs when connection is restored

### Data Flow

```
Browser → RxDB (Local Cache) → Next.js API Routes → gRPC (Future) → Backend
```

## 🧞‍♂️ Mocking (MSW)

API mocking is enabled in development mode. MSW intercepts HTTP requests to `/api/*` endpoints, allowing full-stack development without a backend.

Handlers are defined in `src/mocks/handlers.ts`.

## 🚦 Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Run the frontend development server:**

   ```bash
   bun run dev
   # or
   bun nx run frontend:serve
   ```

3. **Run the backend server:**

   ```bash
   # First, set up Python virtual environment
   cd apps/backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt

   # Then run the server
   python app.py
   # or from root
   bun run dev:backend
   ```

4. **Build for production:**

   ```bash
   bun run build
   # or build specific app
   bun run build:frontend
   ```

5. **View dependency graph:**
   ```bash
   bun run graph
   ```

## 🎯 Nx Commands

- `nx run frontend:serve` - Run frontend dev server
- `nx run backend:serve` - Run backend server
- `nx run frontend:build` - Build frontend
- `nx run-many --target=build --all` - Build all projects
- `nx run-many --target=lint --all` - Lint all projects
- `nx graph` - View project dependency graph

## 🎯 Project Rules

- **State Management**: Use RxDB for data, Zustand for UI state
- **Package Manager**: Use Bun exclusively for all package operations
- **Monorepo**: Use Nx for task orchestration and caching
- **Code Style**: Prettier enforced via pre-commit hooks
- **UI Components**: Import from `@/shared/ui`, not directly from `@heroui/react`

See `docs/ARCHITECTURE.md` for complete guidelines.

## 🔌 WebSockets

A shared hook `useWebSocket` is available for real-time connections.

```typescript
import { useWebSocket } from '@/shared/hooks/useWebSocket';

const { isConnected, lastMessage, sendMessage } = useWebSocket(
  'wss://api.example.com/socket'
);
```
