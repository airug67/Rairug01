// ==========================================
// G A OS — Mock Data for Development
// ==========================================

import type {
  Asset, MarketSummary, Portfolio, Position,
  Agent, AgentRecommendation, Alert, Strategy,
  BacktestResult, Order, RiskAlert, SubscriptionPlan
} from '@types/index'

// ==========================================
// Assets
// ==========================================

export const mockAssets: Asset[] = [
  { id: 'btc', symbol: 'BTC', name: 'Bitcoin', assetClass: 'crypto', exchange: 'Binance', currency: 'USD', price: 67845.20, change24h: 1245.30, changePercent24h: 1.87, volume24h: 28_400_000_000, marketCap: 1_340_000_000_000, high52w: 73750, low52w: 38500 },
  { id: 'eth', symbol: 'ETH', name: 'Ethereum', assetClass: 'crypto', exchange: 'Binance', currency: 'USD', price: 3456.80, change24h: -89.40, changePercent24h: -2.52, volume24h: 15_200_000_000, marketCap: 416_000_000_000, high52w: 4090, low52w: 2180 },
  { id: 'aapl', symbol: 'AAPL', name: 'Apple Inc.', assetClass: 'stocks', exchange: 'NASDAQ', currency: 'USD', price: 189.50, change24h: 2.30, changePercent24h: 1.23, volume24h: 62_400_000, marketCap: 2_940_000_000_000, high52w: 199.62, low52w: 164.08 },
  { id: 'msft', symbol: 'MSFT', name: 'Microsoft Corp.', assetClass: 'stocks', exchange: 'NASDAQ', currency: 'USD', price: 415.20, change24h: -3.80, changePercent24h: -0.91, volume24h: 28_100_000, marketCap: 3_090_000_000_000, high52w: 430.82, low52w: 357.37 },
  { id: 'eurusd', symbol: 'EUR/USD', name: 'Euro / US Dollar', assetClass: 'forex', exchange: 'Forex', currency: 'USD', price: 1.0825, change24h: 0.0032, changePercent24h: 0.30, volume24h: 124_000_000_000 },
  { id: 'xauusd', symbol: 'XAU/USD', name: 'Gold', assetClass: 'commodities', exchange: 'COMEX', currency: 'USD', price: 2389.50, change24h: 15.20, changePercent24h: 0.64, volume24h: 42_000_000_000 },
  { id: 'spy', symbol: 'SPY', name: 'SPDR S&P 500 ETF', assetClass: 'etf', exchange: 'NYSE Arca', currency: 'USD', price: 545.30, change24h: 4.10, changePercent24h: 0.76, volume24h: 78_500_000, marketCap: 545_000_000_000 },
  { id: 'es', symbol: 'ES', name: 'S&P 500 E-Mini Futures', assetClass: 'futures', exchange: 'CME', currency: 'USD', price: 5482.50, change24h: 38.75, changePercent24h: 0.71, volume24h: 1_850_000 },
  { id: 'sol', symbol: 'SOL', name: 'Solana', assetClass: 'crypto', exchange: 'Coinbase', currency: 'USD', price: 142.35, change24h: 8.90, changePercent24h: 6.67, volume24h: 4_200_000_000, marketCap: 62_000_000_000 },
  { id: 'googl', symbol: 'GOOGL', name: 'Alphabet Inc.', assetClass: 'stocks', exchange: 'NASDAQ', currency: 'USD', price: 176.80, change24h: -1.20, changePercent24h: -0.67, volume24h: 32_100_000, marketCap: 2_180_000_000_000 },
  { id: 'gbpusd', symbol: 'GBP/USD', name: 'British Pound / US Dollar', assetClass: 'forex', exchange: 'Forex', currency: 'USD', price: 1.2650, change24h: -0.0045, changePercent24h: -0.35, volume24h: 89_000_000_000 },
  { id: 'cl', symbol: 'CL', name: 'Crude Oil WTI Futures', assetClass: 'futures', exchange: 'NYMEX', currency: 'USD', price: 78.45, change24h: -1.30, changePercent24h: -1.63, volume24h: 980_000 },
  { id: 'tsla', symbol: 'TSLA', name: 'Tesla Inc.', assetClass: 'stocks', exchange: 'NASDAQ', currency: 'USD', price: 248.60, change24h: 12.40, changePercent24h: 5.25, volume24h: 118_000_000, marketCap: 790_000_000_000 },
  { id: 'qqq', symbol: 'QQQ', name: 'Invesco QQQ Trust', assetClass: 'etf', exchange: 'NASDAQ', currency: 'USD', price: 475.80, change24h: 3.20, changePercent24h: 0.68, volume24h: 42_100_000 },
]

export const mockMarketSummary: MarketSummary = {
  totalAssets: 14,
  advancing: 8,
  declining: 5,
  unchanged: 1,
  totalVolume: 431_000_000_000,
  marketSentiment: 'bullish',
}

// ==========================================
// Portfolio
// ==========================================

export const mockPortfolio: Portfolio = {
  id: 'portfolio-1',
  name: 'Main Portfolio',
  totalValue: 248_500.00,
  cashBalance: 45_000.00,
  buyingPower: 67_500.00,
  dayPL: 3_240.50,
  totalPL: 28_450.00,
  totalPLPercent: 12.93,
  diversificationScore: 72,
  riskScore: 35,
  lastUpdated: Date.now(),
  positions: [
    { id: 'pos-1', assetId: 'btc', symbol: 'BTC', name: 'Bitcoin', assetClass: 'crypto', quantity: 0.85, avgEntryPrice: 62400, currentPrice: 67845.20, marketValue: 57668.42, unrealizedPL: 4628.42, unrealizedPLPercent: 8.72, realizedPL: 1200, allocation: 23.2, assetAllocationTarget: 20 },
    { id: 'pos-2', assetId: 'aapl', symbol: 'AAPL', name: 'Apple Inc.', assetClass: 'stocks', quantity: 120, avgEntryPrice: 178.20, currentPrice: 189.50, marketValue: 22740, unrealizedPL: 1356.00, unrealizedPLPercent: 6.34, realizedPL: 0, allocation: 9.1, assetAllocationTarget: 10 },
    { id: 'pos-3', assetId: 'msft', symbol: 'MSFT', name: 'Microsoft Corp.', assetClass: 'stocks', quantity: 45, avgEntryPrice: 398.40, currentPrice: 415.20, marketValue: 18684, unrealizedPL: 756.00, unrealizedPLPercent: 4.22, realizedPL: 0, allocation: 7.5, assetAllocationTarget: 10 },
    { id: 'pos-4', assetId: 'spy', symbol: 'SPY', name: 'SPDR S&P 500 ETF', assetClass: 'etf', quantity: 85, avgEntryPrice: 528.10, currentPrice: 545.30, marketValue: 46350.50, unrealizedPL: 1462.00, unrealizedPLPercent: 3.26, realizedPL: 850, allocation: 18.6, assetAllocationTarget: 20 },
    { id: 'pos-5', assetId: 'sol', symbol: 'SOL', name: 'Solana', assetClass: 'crypto', quantity: 150, avgEntryPrice: 118.50, currentPrice: 142.35, marketValue: 21352.50, unrealizedPL: 3577.50, unrealizedPLPercent: 20.13, realizedPL: 400, allocation: 8.6, assetAllocationTarget: 5 },
    { id: 'pos-6', assetId: 'xauusd', symbol: 'XAU/USD', name: 'Gold', assetClass: 'commodities', quantity: 8, avgEntryPrice: 2320.00, currentPrice: 2389.50, marketValue: 19116, unrealizedPL: 556, unrealizedPLPercent: 3.00, realizedPL: 0, allocation: 7.7, assetAllocationTarget: 10 },
  ],
}

// ==========================================
// Agents
// ==========================================

export const mockAgents: Agent[] = [
  { id: 'agent-1', name: 'Market Intelligence', description: 'Monitors global markets, news, and macro data', status: 'active', lastRun: Date.now() - 120_000, confidence: 94, capabilities: ['Market data analysis', 'News sentiment', 'Macro tracking'] },
  { id: 'agent-2', name: 'Opportunity Discovery', description: 'Detects trends, breakouts, and opportunities', status: 'active', lastRun: Date.now() - 180_000, confidence: 87, capabilities: ['Pattern detection', 'Breakout scanning', 'Arbitrage detection'] },
  { id: 'agent-3', name: 'Risk Management', description: 'Monitors exposure, positions, and limits', status: 'active', lastRun: Date.now() - 60_000, confidence: 96, capabilities: ['Position sizing', 'Exposure monitoring', 'Drawdown protection'] },
  { id: 'agent-4', name: 'Execution', description: 'Manages order routing and execution', status: 'idle', lastRun: Date.now() - 600_000, capabilities: ['Order management', 'Slippage estimation', 'Broker integration'] },
  { id: 'agent-5', name: 'Portfolio', description: 'Tracks allocation and rebalancing', status: 'active', lastRun: Date.now() - 300_000, confidence: 91, capabilities: ['Asset allocation', 'Rebalancing', 'Performance analytics'] },
  { id: 'agent-6', name: 'Learning', description: 'Analyzes past trades for improvement', status: 'idle', lastRun: Date.now() - 3_600_000, capabilities: ['Trade analysis', 'Performance reports', 'Pattern recognition'] },
  { id: 'agent-7', name: 'Strategy Builder', description: 'Creates and backtests strategies', status: 'active', lastRun: Date.now() - 900_000, confidence: 88, capabilities: ['Visual strategy builder', 'Backtesting', 'Scenario analysis'] },
]

export const mockRecommendations: AgentRecommendation[] = [
  { id: 'rec-1', agentId: 'agent-2', agentName: 'Opportunity Discovery', type: 'opportunity', title: 'SOL Breakout Detected', description: 'Solana breaking above $140 resistance with strong volume. Momentum indicators confirm bullish continuation.', plainEnglishExplanation: 'Solana just broke through a key price level with strong buying pressure. Our AI sees a 78% chance this uptrend continues in the short term.', confidence: 78, assetIds: ['sol'], action: 'Consider adding to position', timestamp: Date.now() - 600_000, read: false },
  { id: 'rec-2', agentId: 'agent-1', agentName: 'Market Intelligence', type: 'insight', title: 'Fed Rate Decision Impact', description: 'Upcoming FOMC meeting may indicate rate hold. Market pricing in 85% probability of no change.', plainEnglishExplanation: 'The Federal Reserve is meeting soon and most traders expect them to keep interest rates the same. This is generally positive for stocks and crypto.', confidence: 92, timestamp: Date.now() - 1_200_000, read: false },
  { id: 'rec-3', agentId: 'agent-3', agentName: 'Risk Management', type: 'risk', title: 'Crypto Concentration Warning', description: 'Crypto allocation at 31.8% exceeds target of 25%. Consider rebalancing to reduce volatility exposure.', plainEnglishExplanation: 'Your crypto investments are now 32% of your portfolio, which is higher than your planned 25% target. This means more risk if crypto prices drop suddenly.', confidence: 95, assetIds: ['btc', 'sol'], action: 'Rebalance crypto position', timestamp: Date.now() - 900_000, read: false },
  { id: 'rec-4', agentId: 'agent-5', agentName: 'Portfolio', type: 'rebalance', title: 'Quarterly Rebalance Suggested', description: 'Portfolio drift detected. Rebalance to restore target allocations and improve diversification score from 72 to 85.', plainEnglishExplanation: 'Your portfolio has drifted away from your target mix over time. Rebalancing would bring it back in line and better spread your risk.', confidence: 88, timestamp: Date.now() - 1_800_000, read: false },
  { id: 'rec-5', agentId: 'agent-7', agentName: 'Strategy Builder', type: 'insight', title: 'Golden Cross on SPY', description: '50-day MA crossed above 200-day MA on SPY. Historically bullish signal with 72% probability of positive returns in next 30 days.', plainEnglishExplanation: 'A key technical signal just triggered on the S&P 500 ETF — the short-term trend is now above the long-term trend. This has historically been a good sign for the market.', confidence: 72, assetIds: ['spy'], action: 'Review strategy', timestamp: Date.now() - 2_400_000, read: true },
  { id: 'rec-6', agentId: 'agent-6', agentName: 'Learning', type: 'insight', title: 'Winning Pattern Identified', description: 'Your breakout trades on high-volume Mondays have a 67% win rate. Consider increasing allocation to this pattern.', plainEnglishExplanation: 'Looking at your past trades, you tend to do well when you buy breakouts on Mondays with high trading volume. You might want to focus on this pattern more.', confidence: 76, timestamp: Date.now() - 7_200_000, read: true },
]

// ==========================================
// Alerts
// ==========================================

export const mockAlerts: Alert[] = [
  { id: 'alert-1', type: 'price', title: 'BTC above $68,000', message: 'Bitcoin crossed above $68,000, up 1.87% today', severity: 'info', assetId: 'btc', symbol: 'BTC', read: false, timestamp: Date.now() - 300_000 },
  { id: 'alert-2', type: 'risk', title: 'Daily Loss Limit Approaching', message: 'Portfolio down 2.1% today. Daily loss limit is 3%.', severity: 'warning', read: false, timestamp: Date.now() - 900_000 },
  { id: 'alert-3', type: 'agent', title: 'New Opportunity: SOL Breakout', message: 'Opportunity Discovery agent detected a breakout pattern on Solana', severity: 'info', assetId: 'sol', symbol: 'SOL', read: false, timestamp: Date.now() - 600_000 },
  { id: 'alert-4', type: 'technical', title: 'SPY Golden Cross', message: '50-day MA crossed above 200-day MA on SPY', severity: 'info', assetId: 'spy', symbol: 'SPY', read: true, timestamp: Date.now() - 2_400_000 },
]

// ==========================================
// Orders (Paper Trading)
// ==========================================

export const mockOrders: Order[] = [
  { id: 'ord-1', assetId: 'sol', symbol: 'SOL', side: 'buy', type: 'market', quantity: 50, filledQuantity: 50, price: 142.35, status: 'filled', isPaperTrade: true, createdAt: Date.now() - 3_600_000, updatedAt: Date.now() - 3_599_000 },
  { id: 'ord-2', assetId: 'btc', symbol: 'BTC', side: 'sell', type: 'limit', quantity: 0.1, filledQuantity: 0, price: 69000, status: 'open', isPaperTrade: true, createdAt: Date.now() - 7_200_000, updatedAt: Date.now() - 7_200_000 },
  { id: 'ord-3', assetId: 'aapl', symbol: 'AAPL', side: 'buy', type: 'limit', quantity: 25, filledQuantity: 25, price: 185.00, status: 'filled', isPaperTrade: true, createdAt: Date.now() - 86_400_000, updatedAt: Date.now() - 85_800_000 },
  { id: 'ord-4', assetId: 'spy', symbol: 'SPY', side: 'sell', type: 'stop', quantity: 10, filledQuantity: 0, price: 535.00, stopPrice: 532.00, status: 'open', isPaperTrade: true, createdAt: Date.now() - 172_800_000, updatedAt: Date.now() - 172_800_000 },
  { id: 'ord-5', assetId: 'msft', symbol: 'MSFT', side: 'buy', type: 'market', quantity: 10, filledQuantity: 5, price: 415.20, status: 'partial', isPaperTrade: true, createdAt: Date.now() - 300_000, updatedAt: Date.now() - 120_000 },
]

// ==========================================
// Strategies
// ==========================================

export const mockStrategies: Strategy[] = [
  { id: 'strat-1', name: 'Golden Cross Momentum', description: 'Buy when 50-day MA crosses above 200-day MA with volume confirmation', rules: [
    { id: 'rule-1', field: 'ma_50', operator: 'crosses_above', value: 'ma_200' },
    { id: 'rule-2', field: 'volume', operator: 'gt', value: '1.5', value2: 'avg_volume_20' },
  ], createdAt: Date.now() - 30 * 86_400_000, updatedAt: Date.now() - 7 * 86_400_000, version: 3, isActive: true },
  { id: 'strat-2', name: 'RSI Oversold Bounce', description: 'Buy when RSI(14) drops below 30 and starts rising', rules: [
    { id: 'rule-3', field: 'rsi_14', operator: 'crosses_above', value: '30' },
  ], createdAt: Date.now() - 60 * 86_400_000, updatedAt: Date.now() - 14 * 86_400_000, version: 2, isActive: true },
  { id: 'strat-3', name: 'Breakout Volume Surge', description: 'Enter on price break of 20-day high with 2x average volume', rules: [
    { id: 'rule-4', field: 'price', operator: 'crosses_above', value: 'high_20' },
    { id: 'rule-5', field: 'volume', operator: 'gt', value: '2', value2: 'avg_volume_20' },
  ], createdAt: Date.now() - 45 * 86_400_000, updatedAt: Date.now() - 10 * 86_400_000, version: 1, isActive: false },
]

// ==========================================
// Backtest Results
// ==========================================

export const mockBacktestResults: BacktestResult[] = [
  { id: 'bt-1', strategyId: 'strat-1', strategyName: 'Golden Cross Momentum', assetIds: ['spy'], startDate: Date.now() - 365 * 86_400_000, endDate: Date.now(), initialCapital: 10000, finalCapital: 13450, totalReturn: 3450, totalReturnPercent: 34.5, maxDrawdown: 8.2, sharpeRatio: 1.45, winRate: 62, totalTrades: 24, profitableTrades: 15 },
  { id: 'bt-2', strategyId: 'strat-2', strategyName: 'RSI Oversold Bounce', assetIds: ['spy', 'aapl'], startDate: Date.now() - 365 * 86_400_000, endDate: Date.now(), initialCapital: 10000, finalCapital: 11230, totalReturn: 1230, totalReturnPercent: 12.3, maxDrawdown: 5.1, sharpeRatio: 0.92, winRate: 55, totalTrades: 38, profitableTrades: 21 },
  { id: 'bt-3', strategyId: 'strat-3', strategyName: 'Breakout Volume Surge', assetIds: ['btc', 'sol'], startDate: Date.now() - 180 * 86_400_000, endDate: Date.now(), initialCapital: 10000, finalCapital: 15890, totalReturn: 5890, totalReturnPercent: 58.9, maxDrawdown: 15.3, sharpeRatio: 1.78, winRate: 48, totalTrades: 31, profitableTrades: 15 },
]

// ==========================================
// Risk Alerts
// ==========================================

export const mockRiskAlerts: RiskAlert[] = [
  { id: 'risk-1', severity: 'warning', message: 'Crypto allocation at 31.8% exceeds 25% target', plainEnglishExplanation: 'Your crypto investments are too high compared to your plan.', timestamp: Date.now() - 1_800_000, acknowledged: false },
  { id: 'risk-2', severity: 'info', message: 'Portfolio correlation increasing between BTC and SOL', plainEnglishExplanation: 'Your crypto assets are moving together more than usual, reducing diversification benefit.', timestamp: Date.now() - 3_600_000, acknowledged: true },
]

// ==========================================
// Subscription Plans
// ==========================================

export const mockPlans: SubscriptionPlan[] = [
  { id: 'plan-freemium', tier: 'freemium', name: 'Freemium', price: 0, priceAnnual: 0, features: ['Basic dashboard', 'Delayed market data', '1 agent', 'Paper trading (limited)', '3 positions max'], maxPositions: 3, realtimeData: false, maxAgents: 1, backtestingEnabled: false, brokerConnections: 0, apiAccess: false, prioritySupport: false },
  { id: 'plan-starter', tier: 'starter', name: 'Starter', price: 19, priceAnnual: 190, features: ['Full dashboard', '15-min delayed data', '3 agents (Market Intel, Risk, Portfolio)', 'Paper trading', '10 positions max', 'Basic backtesting'], maxPositions: 10, realtimeData: false, maxAgents: 3, backtestingEnabled: true, brokerConnections: 0, apiAccess: false, prioritySupport: false },
  { id: 'plan-pro', tier: 'pro', name: 'Pro', price: 49, priceAnnual: 490, features: ['Real-time market data', '5 agents', 'Paper + live trading', '50 positions max', 'Advanced backtesting', '1 broker connection', 'API access'], maxPositions: 50, realtimeData: true, maxAgents: 5, backtestingEnabled: true, brokerConnections: 1, apiAccess: true, prioritySupport: false },
  { id: 'plan-elite', tier: 'elite', name: 'Elite', price: 99, priceAnnual: 990, features: ['Real-time data all asset classes', 'All 7 agents', 'Unlimited positions', 'Multi-broker (up to 5)', 'Strategy Builder', 'Advanced backtesting', 'API access', 'Priority support'], maxPositions: 999, realtimeData: true, maxAgents: 7, backtestingEnabled: true, brokerConnections: 5, apiAccess: true, prioritySupport: true },
]

// ==========================================
// Time Series Data (for charts)
// ==========================================

export function generatePriceHistory(basePrice: number, days: number, volatility: number = 0.02): { timestamp: number; price: number }[] {
  const data: { timestamp: number; price: number }[] = []
  const now = Date.now()
  let price = basePrice

  for (let i = days; i >= 0; i--) {
    const timestamp = now - i * 86_400_000
    const change = price * (Math.random() - 0.48) * volatility
    price = price + change
    data.push({ timestamp, price: Math.max(price, basePrice * 0.3) })
  }
  return data
}

export const mockPriceHistoryBTC = generatePriceHistory(67845, 90, 0.035)
export const mockPriceHistorySPY = generatePriceHistory(545, 90, 0.015)
export const mockPriceHistorySOL = generatePriceHistory(142, 90, 0.05)