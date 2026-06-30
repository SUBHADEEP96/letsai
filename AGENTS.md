# AGENTS — Repo guidance for AI coding agents

Purpose: short, actionable guidance so an AI coding agent can be productive immediately.

Overview

- Project: Next.js marketing site (App Router) with demo AI routes and client components.
- Key commands and workflows are small — prefer linking to existing docs rather than duplicating them.

Quick start

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev` (uses `next dev --turbopack`)
- Build: `pnpm build` (`next build --turbopack`)
- Lint: `pnpm lint`

Where to look (high-signal files)

- App entry / routes: `app/` — app router layout, page, and edge API routes.
- Components: `components/` — UI sections and shared primitives used by the single-page layout.
- Utilities & AI helpers: `lib/ai/` — `vercel-ai.ts`, `openai-agents.ts`, `langgraph.ts` contain the code that agents will extend or wire to real providers.
- Server API stubs: `app/api/*` — safe mock responses when env keys are missing.
- README: [README.md](README.md) — contains setup, scripts, and env guidance (link to details).

Conventions & notes for agents

- Package manager: `pnpm` is used in README and expected for installs and scripts.
- Next config: project uses modern Next + Turbopack flags in `package.json` scripts; avoid removing `--turbopack` unless necessary.
- Edge runtime: some API routes (contact, demos) are Edge-friendly; prefer lightweight handlers and avoid Node-only APIs in those routes.
- Env variables: See `README.md` for `.env.local` keys. Never hardcode secrets into the repo.
- Tests: none present; prefer small, focused manual verification steps (run dev + open localhost) when validating changes.

What an agent should do first

1. Read `package.json` scripts and `README.md` for environment and run commands.
2. Inspect `lib/ai/` for provider abstractions before editing AI integrations.
3. Open `app/api/*` routes to understand mock behaviour and Edge constraints.
4. When adding provider keys or secrets, update README and instruct the user to set `.env.local` (do not write secrets into repo).

When to open a PR vs. ask the user

- Small, non-breaking docs or tests: open a PR with description and testing steps.
- Provider integration or runtime changes: ask the user for approval and any required API keys or account details.

Related docs to link (don't duplicate)

- README: [README.md](README.md)

If you want, I can also create finer-grained instruction files (e.g., `AGENTS-frontend.md`, `AGENTS-backend.md`) for subdomains like AI integrations or deployment.
