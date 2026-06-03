-- G A OS — Supabase Schema
-- Run this in your Supabase SQL Editor to set up the database.

-- User Profiles (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT DEFAULT 'Trader',
  mode TEXT DEFAULT 'guided' CHECK (mode IN ('beginner', 'guided', 'advanced', 'research')),
  automation_level TEXT DEFAULT 'semi-automated' CHECK (automation_level IN ('manual', 'semi-automated', 'automated')),
  subscription_tier TEXT DEFAULT 'freemium' CHECK (subscription_tier IN ('freemium', 'starter', 'pro', 'elite', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (new.id, new.email, COALESCE(new.raw_user_meta_data->>'display_name', 'Trader'));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- User Settings
CREATE TABLE IF NOT EXISTS public.user_settings (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  theme TEXT DEFAULT 'dark',
  language TEXT DEFAULT 'en',
  daily_loss_limit DECIMAL DEFAULT 3.0,
  max_position_size_pct DECIMAL DEFAULT 25.0,
  max_leverage DECIMAL DEFAULT 2.0,
  stop_loss_default DECIMAL DEFAULT 5.0,
  email_alerts BOOLEAN DEFAULT true,
  push_alerts BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own settings"
  ON public.user_settings FOR ALL
  USING (auth.uid() = user_id);

-- Paper Trading Accounts
CREATE TABLE IF NOT EXISTS public.paper_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  cash_balance DECIMAL DEFAULT 100000.00,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.paper_accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own paper account"
  ON public.paper_accounts FOR ALL
  USING (auth.uid() = user_id);

-- Paper Trades
CREATE TABLE IF NOT EXISTS public.paper_trades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  account_id UUID REFERENCES public.paper_accounts(id) ON DELETE CASCADE,
  symbol TEXT NOT NULL,
  asset_class TEXT NOT NULL,
  side TEXT NOT NULL CHECK (side IN ('buy', 'sell')),
  order_type TEXT NOT NULL CHECK (order_type IN ('market', 'limit', 'stop', 'stop_limit')),
  quantity DECIMAL NOT NULL,
  price DECIMAL,
  stop_price DECIMAL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'open', 'filled', 'partial', 'cancelled', 'rejected')),
  filled_quantity DECIMAL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.paper_trades ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own trades"
  ON public.paper_trades FOR ALL
  USING (auth.uid() = user_id);

-- Watchlists
CREATE TABLE IF NOT EXISTS public.watchlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  assets JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.watchlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own watchlists"
  ON public.watchlists FOR ALL
  USING (auth.uid() = user_id);