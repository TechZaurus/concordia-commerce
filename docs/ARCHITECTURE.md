# Architecture Documentation

## Overview

Concordia Commerce is a local-first e-commerce dashboard built with Next.js, RxDB, and designed to integrate with a Python gRPC backend.

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **TypeScript** - Strict mode for type safety
- **RxDB** - Local-first reactive database with key compression
- **Zustand** - UI state management
- **TailwindCSS + HeroUI** - Styling

### Backend (Future)

- **Python** - Backend services
- **gRPC** - High-performance RPC framework
- **Protocol Buffers** - Data serialization

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        Browser                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  React Components                                 │  │
│  │  - Subscribe to RxDB                             │  │
│  │  - Reactive updates                              │  │
│  └──────────────┬───────────────────────────────────┘  │
│                 │                                        │
│  ┌──────────────▼───────────────────────────────────┐  │
│  │  RxDB (IndexedDB + Key Compression)              │  │
│  │  - Local-first storage                           │  │
│  │  - Offline capability                            │  │
│  │  - Reactive queries                              │  │
│  └──────────────┬───────────────────────────────────┘  │
│                 │                                        │
└─────────────────┼────────────────────────────────────────┘
                  │ HTTP/REST
                  │
┌─────────────────▼────────────────────────────────────────┐
│              Next.js API Routes                          │
│  - REST endpoints (/api/*)                              │
│  - gRPC client wrapper                                  │
│  - Error handling                                       │
│  - Response transformation                              │
└─────────────────┬────────────────────────────────────────┘
                  │ gRPC
                  │
┌─────────────────▼────────────────────────────────────────┐
│              Python Backend (Future)                     │
│  - Business logic                                       │
│  - Database operations                                  │
│  - gRPC services                                        │
└──────────────────────────────────────────────────────────┘
```

## RxDB Configuration

### Storage Strategy

- **Base Storage**: Dexie (IndexedDB wrapper)
- **Key Compression**: Enabled (reduces storage by ~40%)
- **Future**: OPFS support for 2-3x performance improvement

### Collections

All RxDB collections follow this pattern:

```typescript
{
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: { type: 'string' },
    // ... other fields
    updatedAt: { type: 'number' }
  }
}
```

## gRPC Integration

### Proto Files

Located in `protos/` directory. Example:

```protobuf
service StatsService {
  rpc GetDashboardStats (StatsRequest) returns (StatsResponse);
}
```

### Client Implementation

The gRPC client is initialized in `src/shared/lib/grpc-client.ts` and used by Next.js API routes.

### Environment Configuration

```env
GRPC_SERVER_URL=localhost:50051
```

## Development Mocking (MSW)

### Strategy

- Mock the **Next.js API layer**, not gRPC directly
- MSW intercepts HTTP requests to `/api/*`
- Enables full-stack development without backend

### Handler Example

```typescript
http.get('/api/stats', () => {
  return HttpResponse.json({
    totalSales: 15430,
    activeUsers: 1205,
    conversionRate: 3.2,
  });
});
```

## Offline-First Approach

1. **Initial Load**: Check RxDB for cached data
2. **Background Sync**: Fetch from API if needed
3. **Local Update**: Store in RxDB via `upsert()`
4. **Reactive UI**: Components auto-update via RxDB subscriptions

### Benefits

- Instant UI responses
- Works offline
- Reduces server load
- Better UX with optimistic updates

## Feature-Sliced Design

```
src/
├── app/                  # Next.js routes and layouts
├── features/             # Business features
│   └── dashboard/
│       ├── components/   # Feature-specific components
│       └── index.ts
├── shared/               # Shared utilities
│   ├── lib/              # RxDB, gRPC clients
│   ├── ui/               # UI component abstractions
│   └── hooks/            # Shared React hooks
└── mocks/                # MSW handlers
```

## Performance Optimizations

### RxDB

- Key compression enabled
- Lazy collection loading
- Efficient indexing on primary keys

### React

- Memo expensive components
- Proper useEffect dependencies
- Avoid unnecessary re-renders from RxDB subscriptions

### Bundle Size

- Dynamic imports for large features
- Tree-shaking enabled
- Monitor with `bun run build`

## Security Considerations

### Data Handling

- No sensitive data in localStorage
- RxDB encryption available for sensitive collections
- Validate all API responses

### gRPC Communication

- Use TLS in production
- Implement authentication/authorization
- Rate limiting on API routes

## Future Enhancements

### OPFS Storage

Replace Dexie with OPFS for better performance:

```typescript
import { getRxStorageOPFS } from 'rxdb/plugins/storage-opfs';
```

### gRPC-Web

For direct browser-to-backend gRPC:

```typescript
import { grpc } from '@improbable-eng/grpc-web';
```

### Replication

RxDB replication plugin for real-time sync:

```typescript
import { replicateRxCollection } from 'rxdb/plugins/replication';
```
