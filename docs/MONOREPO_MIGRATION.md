# Monorepo Migration Guide

This document outlines the migration from a single Next.js application to an Nx monorepo structure.

## What Changed

### Directory Structure

**Before:**

```
concordia-commerce/
├── src/              # Frontend source
├── public/           # Static assets
├── protos/           # Proto files
└── package.json      # Single package.json
```

**After:**

```
concordia-commerce/
├── apps/
│   ├── frontend/     # Next.js app (moved from root)
│   └── backend/      # Flask backend (new)
├── packages/
│   ├── protos/       # Shared protos (moved)
│   └── ui/           # Component library (placeholder)
└── nx.json           # Nx configuration
```

### Package Management

- **Before:** Single `package.json` with all dependencies
- **After:** Root `package.json` + individual `package.json` per project
- **Workspaces:** npm workspaces enabled for dependency hoisting

### Scripts

**Before:**

```bash
npm run dev        # Start Next.js
npm run build      # Build Next.js
```

**After:**

```bash
npm run dev                    # Start frontend
npm run dev:backend            # Start backend
npm run build                  # Build all projects
npm run build:frontend         # Build frontend only
nx run frontend:serve          # Direct Nx command
nx graph                       # View dependency graph
```

## Migration Steps Completed

1. ✅ Installed Nx and workspace plugins
2. ✅ Created `apps/` and `packages/` directories
3. ✅ Moved frontend code to `apps/frontend/`
4. ✅ Moved protos to `packages/protos/`
5. ✅ Created Flask backend in `apps/backend/`
6. ✅ Created UI library placeholder in `packages/ui/`
7. ✅ Updated root `package.json` with workspaces
8. ✅ Created `nx.json` configuration
9. ✅ Created `project.json` for each project
10. ✅ Updated documentation (README.md, ARCHITECTURE.md)
11. ✅ Updated `.gitignore` for Python and Nx
12. ✅ Cleaned up root-level config files

## Next Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all dependencies for all projects in the workspace.

### 2. Verify Frontend

```bash
npm run dev
# or
nx run frontend:serve
```

Visit `http://localhost:3000` to verify the frontend works.

### 3. Set Up Backend

```bash
cd apps/backend
python -m venv venv

# Windows:
venv\Scripts\activate

# Unix/MacOS:
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

Visit `http://localhost:5000/health` to verify the backend works.

### 4. Update Import Paths (If Needed)

Most imports should work as-is since we preserved the `src/` structure within `apps/frontend/`. However, if you reference protos, update paths:

**Before:**

```typescript
import proto from '../../protos/stats.proto';
```

**After:**

```typescript
import proto from '@concordia/protos/stats.proto';
```

### 5. Configure tsconfig Paths (Optional)

Add to `apps/frontend/tsconfig.json` if you want to reference packages:

```json
{
  "compilerOptions": {
    "paths": {
      "@concordia/protos/*": ["../../packages/protos/*"],
      "@concordia/ui": ["../../packages/ui/src"]
    }
  }
}
```

## Benefits of Monorepo

### 1. **Shared Code**

- Proto definitions shared between frontend and backend
- Future UI library shared across multiple apps

### 2. **Coordinated Builds**

- Nx caches build outputs
- Only rebuilds what changed
- Parallel task execution

### 3. **Dependency Management**

- Single `node_modules` at root (for JS packages)
- Consistent versions across projects
- Easier dependency updates

### 4. **Developer Experience**

- Single repository to clone
- Unified tooling (Prettier, ESLint, etc.)
- Better IDE support with workspace features

### 5. **CI/CD Optimization**

- Nx affected commands (`nx affected:build`)
- Only test/build changed projects
- Faster CI pipelines

## Nx Commands Reference

### Running Tasks

```bash
# Run a specific target for a project
nx run <project>:<target>

# Examples:
nx run frontend:serve
nx run frontend:build
nx run backend:serve
```

### Running Multiple Projects

```bash
# Run target for all projects
nx run-many --target=build --all

# Run target for specific projects
nx run-many --target=lint --projects=frontend,backend
```

### Affected Commands

```bash
# Only build projects affected by changes
nx affected:build

# Only test affected projects
nx affected:test

# Only lint affected projects
nx affected:lint
```

### Dependency Graph

```bash
# View project dependencies
nx graph

# View affected projects
nx affected:graph
```

### Caching

Nx automatically caches task outputs. To clear cache:

```bash
nx reset
```

## Troubleshooting

### Issue: Frontend won't start

**Solution:** Ensure you're in the root directory and run:

```bash
npm install
npm run dev
```

### Issue: Backend import errors

**Solution:** Activate the virtual environment:

```bash
cd apps/backend
venv\Scripts\activate  # Windows
source venv/bin/activate  # Unix/MacOS
```

### Issue: Nx commands not found

**Solution:** Install Nx globally or use npx:

```bash
npm install -g nx
# or
npx nx <command>
```

### Issue: Module resolution errors

**Solution:** Check `tsconfig.json` paths and ensure `node_modules` is installed:

```bash
npm install
```

## Future Enhancements

### 1. Add More Apps

```bash
nx g @nx/next:app mobile-app
nx g @nx/node:app api-gateway
```

### 2. Implement UI Library

- Move shared components to `packages/ui`
- Build with TypeScript
- Add Storybook for documentation

### 3. Add E2E Testing

```bash
nx g @nx/cypress:e2e frontend-e2e
```

### 4. Set Up CI/CD

- Use `nx affected` commands
- Cache Nx outputs in CI
- Deploy apps independently

## Resources

- [Nx Documentation](https://nx.dev/)
- [Nx React Tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)
- [Nx Python Plugin](https://www.npmjs.com/package/@nxlv/python)
- [Feature-Sliced Design](https://feature-sliced.design/)
