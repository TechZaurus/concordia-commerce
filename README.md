# Concordia Commerce Dashboard

To be described

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **State Management:** 
  - Server: [TanStack Query](https://tanstack.com/query/latest)
  - Client/UI: [Zustand](https://docs.pmnd.rs/zustand)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **Mocking:** [MSW (Mock Service Worker)](https://mswjs.io/)
- **Real-time:** Native WebSockets

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

## 🧞‍♂️ Mocking (MSW)

API mocking is enabled in development mode. Handlers are defined in `src/mocks/handlers.ts`.

## 🚦 Getting Started

1. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔌 WebSockets

A shared hook `useWebSocket` is available for real-time connections.
```typescript
import { useWebSocket } from '@/shared/hooks/useWebSocket';

const { isConnected, lastMessage, sendMessage } = useWebSocket('wss://api.example.com/socket');
```
