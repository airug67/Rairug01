# G A OS — AI-Powered Trading Intelligence Platform

Seven specialized AI agents working together with human-in-the-loop oversight — providing institutional-grade analysis across crypto, stocks, forex, commodities, ETFs, and futures.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Recharts, Lucide React
- **Routing:** React Router v6
- **Backend:** Supabase (PostgreSQL + Auth)
- **Build:** Vite 8 (Rolldown)
- **Deploy:** Vercel (SPA)

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start dev server
npm run dev
```

## Build for Production

```bash
npm run build
# Output: dist/ — ready for Vercel deployment
```

## Project Structure

```
src/
├── agents/           # AI agent logic (extensible)
├── components/
│   ├── layout/       # App shell (sidebar, header, agent bar)
│   └── ui/           # Design system (StatCard, Badge, Button, etc.)
├── hooks/            # Custom React hooks
├── lib/
│   ├── mock-data.ts  # Development mock data
│   ├── supabase.ts   # Supabase client
│   └── utils.ts      # Formatting utilities
├── pages/
│   ├── landing/      # Marketing site
│   ├── dashboard/    # Main dashboard with AI feed
│   ├── markets/      # Asset explorer
│   ├── opportunities/# AI opportunities
│   ├── portfolio/    # Portfolio analytics
│   ├── strategies/   # Visual strategy builder
│   ├── backtesting/  # Strategy backtesting
│   ├── papertrading/ # Paper trading simulator
│   ├── alerts/       # Notification center
│   ├── reports/      # Performance reports
│   ├── settings/     # User preferences
│   ├── subscriptions/# Plans & pricing
│   └── admin/        # System management
└── types/            # TypeScript definitions
```

## Environment Variables

See `.env.example` for all required variables.

## Database

Run `supabase-schema.sql` in your Supabase SQL Editor to create all tables and RLS policies.

## Deployment

```bash
# The project is Vercel-ready:
vercel --prod
```

Or connect your GitHub repo and Vercel will auto-deploy.

## License

Proprietary — G A OS Inc.