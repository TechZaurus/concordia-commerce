# Concordia Commerce Dashboard

To be described

## 🚀 Tech Stack

### Frontend

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) with React 19
- **Language:** TypeScript (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **State Management:**
  - Database: [RxDB](https://rxdb.info/) (Local-first reactive database with key compression)
  - Client/UI: [Zustand](https://docs.pmnd.rs/zustand)
- **Package Manager:** [Bun](https://bun.sh/)
- **Code Quality:** Prettier + Husky + lint-staged
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Mocking:** [MSW (Mock Service Worker)](https://mswjs.io/)
- **Real-time:** Native WebSockets

### Backend (Future)

- **Backend** with **gRPC** services
- **Protocol Buffers** for data serialization
- Next.js API routes act as gRPC → REST gateway

## 📂 Architecture

The project follows a Feature-Sliced Design inspired architecture:

```
src/
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

1. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun run dev
   ```

4. **Build for production:**
   ```bash
   bun run build
   ```

## 🎯 Project Rules

- **State Management**: Use RxDB for data, Zustand for UI state
- **Package Manager**: Use Bun exclusively (no npm/yarn)
- **Code Style**: Prettier enforced via pre-commit hooks

See `docs/ARCHITECTURE.md` for complete guidelines.

## 🔌 WebSockets

A shared hook `useWebSocket` is available for real-time connections.

```typescript
import { useWebSocket } from '@/shared/hooks/useWebSocket';

const { isConnected, lastMessage, sendMessage } = useWebSocket(
  'wss://api.example.com/socket'
);
```
