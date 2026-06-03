// ==========================================
// G A OS — Core Type Definitions
// ==========================================

export type AssetClass = 'crypto' | 'stocks' | 'forex' | 'commodities' | 'etf' | 'futures'

export type UserMode = 'beginner' | 'guided' | 'advanced' | 'research'

export type AutomationLevel = 'manual' | 'semi-automated' | 'automated'

export type OrderSide = 'buy' | 'sell'
export type OrderType = 'market' | 'limit' | 'stop' | 'stop_limit'
export type OrderStatus = 'pending' | 'open' | 'filled' | 'partial' | 'cancelled' | 'rejected'

export type Timeframe = '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '1d' | '1w' | '1M'

// ==========================================
// Market Data
// ==========================================

export interface PricePoint {
  timestamp: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface Asset {
  id: string
  symbol: string
  name: string
  assetClass: AssetClass
  exchange: string
  currency: string
  price: number
  change24h: number
  changePercent24h: number
  volume24h: number
  marketCap?: number
  high52w?: number
  low52w?: number
}

export interface MarketSummary {
  totalAssets: number
  advancing: number
  declining: number
  unchanged: number
  totalVolume: number
  marketSentiment: 'bullish' | 'bearish' | 'neutral'
}

// ==========================================
// Agent Types
// ==========================================

export interface Agent {
  id: string
  name: string
  description: string
  status: 'active' | 'idle' | 'error' | 'disabled'
  lastRun?: number
  confidence?: number
  capabilities: string[]
}

export interface AgentRecommendation {
  id: string
  agentId: string
  agentName: string
  type: 'alert' | 'opportunity' | 'risk' | 'insight' | 'execution' | 'rebalance'
  title: string
  description: string
  plainEnglishExplanation: string
  confidence: number
  assetIds?: string[]
  action?: string
  timestamp: number
  read: boolean
}

// ==========================================
// Portfolio
// ==========================================

export interface Position {
  id: string
  assetId: string
  symbol: string
  name: string
  assetClass: AssetClass
  quantity: number
  avgEntryPrice: number
  currentPrice: number
  marketValue: number
  unrealizedPL: number
  unrealizedPLPercent: number
  realizedPL: number
  allocation: number
  assetAllocationTarget?: number
}

export interface Portfolio {
  id: string
  name: string
  totalValue: number
  cashBalance: number
  buyingPower: number
  dayPL: number
  totalPL: number
  totalPLPercent: number
  positions: Position[]
  diversificationScore: number
  riskScore: number
  lastUpdated: number
}

// ==========================================
// Orders & Execution
// ==========================================

export interface Order {
  id: string
  assetId: string
  symbol: string
  side: OrderSide
  type: OrderType
  quantity: number
  filledQuantity: number
  price?: number
  stopPrice?: number
  status: OrderStatus
  slippage?: number
  commission?: number
  createdAt: number
  updatedAt: number
  isPaperTrade: boolean
}

// ==========================================
// Strategy & Backtesting
// ==========================================

export interface StrategyRule {
  id: string
  field: string
  operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte' | 'crosses_above' | 'crosses_below' | 'between'
  value: string | number
  value2?: string | number
}

export interface Strategy {
  id: string
  name: string
  description: string
  rules: StrategyRule[]
  createdAt: number
  updatedAt: number
  version: number
  isActive: boolean
}

export interface BacktestResult {
  id: string
  strategyId: string
  strategyName: string
  assetIds: string[]
  startDate: number
  endDate: number
  initialCapital: number
  finalCapital: number
  totalReturn: number
  totalReturnPercent: number
  maxDrawdown: number
  sharpeRatio: number
  winRate: number
  totalTrades: number
  profitableTrades: number
}

// ==========================================
// Risk Management
// ==========================================

export interface RiskLimits {
  dailyLossLimit: number
  maxPositionSize: number
  maxPositionSizePercent: number
  maxLeverage: number
  exposureCap: number
  maxDrawdownPercent: number
  stopLossDefault: number
  takeProfitDefault: number
}

export interface RiskAlert {
  id: string
  severity: 'info' | 'warning' | 'critical'
  message: string
  plainEnglishExplanation: string
  timestamp: number
  acknowledged: boolean
}

// ==========================================
// User & Settings
// ==========================================

export interface UserSettings {
  mode: UserMode
  automationLevel: AutomationLevel
  theme: 'dark' | 'light'
  language: string
  alerts: {
    email: boolean
    push: boolean
    priceAlerts: boolean
    agentRecommendations: boolean
    riskAlerts: boolean
    dailyReport: boolean
  }
  riskLimits: RiskLimits
  preferences: {
    defaultTimeframe: Timeframe
    favoriteAssets: string[]
    watchlists: Watchlist[]
  }
}

export interface Watchlist {
  id: string
  name: string
  assetIds: string[]
}

// ==========================================
// Alerts & Notifications
// ==========================================

export interface Alert {
  id: string
  type: 'price' | 'technical' | 'news' | 'agent' | 'risk' | 'system'
  title: string
  message: string
  severity: 'info' | 'warning' | 'critical'
  assetId?: string
  symbol?: string
  read: boolean
  timestamp: number
}

// ==========================================
// Subscription
// ==========================================

export type SubscriptionTier = 'freemium' | 'starter' | 'pro' | 'elite' | 'enterprise'

export interface SubscriptionPlan {
  id: string
  tier: SubscriptionTier
  name: string
  price: number
  priceAnnual: number
  features: string[]
  maxPositions: number
  realtimeData: boolean
  maxAgents: number
  backtestingEnabled: boolean
  brokerConnections: number
  apiAccess: boolean
  prioritySupport: boolean
}