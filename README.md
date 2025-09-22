# Let’s Sprinkle AI Marketing Site

Modern marketing site for Let’s Sprinkle AI, a customer experience AI studio based in Salt Lake City, Kolkata. Built with Next.js 15 App Router, React 19.1, Tailwind CSS v4, and Turbopack.

## Getting started

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000 to explore the single-page experience with smooth-scroll navigation and live demo widgets.

## Project structure

```
app/
  layout.tsx          # Global metadata + fonts + analytics
  page.tsx            # Single-page layout wiring all sections
  api/
    contact/route.ts  # Contact form handler (Edge runtime)
    demos/
      chat/route.ts     # Vercel AI SDK streaming chat stub
      langgraph/route.ts # LangGraph proxy + mock stream
      agents/route.ts    # OpenAI Agents SDK sample response
components/
  nav/                 # Sticky navigation + mobile drawer
  sections/            # Hero, Tech, Demos, Pricing, Contact, etc.
  ui/                  # Buttons, cards, inputs, animation helpers
lib/
  ai/                  # Chat, agent, and LangGraph helpers
  analytics.tsx        # Pluggable analytics stub
styles/
  globals.css          # Tailwind v4 + global tokens
```

## Environment variables

Copy `.env.example` to `.env.local` and populate when integrating real providers.

```
OPENAI_API_KEY=
LANGGRAPH_SERVER_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

- `OPENAI_API_KEY`: Optional. Enables live OpenAI Agents SDK + chat completions.
- `LANGGRAPH_SERVER_URL`: Optional LangGraph Platform/Server URL for streaming graph runs.
- `NEXT_PUBLIC_ANALYTICS_ID`: Optional analytics site ID used by the lightweight script in `lib/analytics.tsx`.

With no keys configured the API routes respond with safe mock data.

## Wiring real providers

- Update `lib/ai/vercel-ai.ts` to select your preferred provider (OpenAI, Bedrock, vLLM) and model ID.
- Point `LANGGRAPH_SERVER_URL` at a LangGraph runtime that exposes `/api/graph/invoke`.
- Replace the stub tool outputs in `lib/ai/openai-agents.ts` with actual Agents SDK tool definitions.
- Extend `app/api/contact/route.ts` to push leads into CRM, email, or Slack.

## Scripts

```bash
pnpm dev    # Start Turbopack dev server
pnpm build  # Production build
pnpm start  # Run the production build locally
pnpm lint   # Lint with eslint (optional)
```

## Accessibility & performance

- Sticky navigation uses hash-based smooth scrolling with `scroll-margin-top` offsets.
- All interactive elements provide focus styles and keyboard-friendly behaviour.
- Sections leverage `motion` for subtle entrance animations without blocking rendering.
