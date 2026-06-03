import React from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Activity, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  ArrowRight
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'
import { 
  StatCard, 
  Card, 
  CardHeader, 
  Badge, 
  SectionHeader, 
  Button 
} from '@components/ui'
import { 
  mockPortfolio, 
  mockMarketSummary, 
  mockRecommendations, 
  mockAgents,
  generatePriceHistory 
} from '@lib/mock-data'
import { formatCurrency, formatPercent, formatTimestamp, cn } from '@lib/utils'

// Generate some sample portfolio history for the chart
const portfolioHistory = generatePriceHistory(mockPortfolio.totalValue, 30, 0.01)

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <SectionHeader 
        title="Intelligence Dashboard" 
        subtitle="Real-time multi-agent market oversight"
        action={
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-surface-2 px-3 py-1.5 rounded-lg border border-white/5">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Market Sentiment</span>
              <Badge variant={mockMarketSummary.marketSentiment === 'bullish' ? 'positive' : 'negative'}>
                {mockMarketSummary.marketSentiment}
              </Badge>
            </div>
            <Button variant="secondary" size="sm">
              Refresh Data
            </Button>
          </div>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Portfolio Value" 
          value={formatCurrency(mockPortfolio.totalValue)} 
          change="+1.2%" 
          changeLabel="vs yesterday"
          icon={<Wallet className="w-5 h-5" />}
        />
        <StatCard 
          label="Day P&L" 
          value={formatCurrency(mockPortfolio.dayPL)} 
          change={`+${(mockPortfolio.dayPL / (mockPortfolio.totalValue - mockPortfolio.dayPL) * 100).toFixed(2)}%`}
          icon={<TrendingUp className="w-5 h-5 text-positive" />}
        />
        <StatCard 
          label="Open Positions" 
          value={mockPortfolio.positions.length.toString()} 
          changeLabel="Assets across 3 classes"
          icon={<Activity className="w-5 h-5" />}
        />
        <StatCard 
          label="Active Signals" 
          value={mockRecommendations.filter(r => !r.read).length.toString()} 
          changeLabel="Unread recommendations"
          icon={<Zap className="w-5 h-5 text-warning" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="min-h-[400px] flex flex-col">
            <CardHeader 
              title="Portfolio Performance" 
              action={
                <div className="flex items-center gap-2">
                  <Badge variant="default">30D</Badge>
                </div>
              }
            />
            <div className="flex-1 w-full h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioHistory}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-gaos-500)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-gaos-500)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="timestamp" 
                    hide 
                  />
                  <YAxis 
                    hide 
                    domain={['dataMin - 1000', 'dataMax + 1000']} 
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-surface-3 border border-white/10 p-2 rounded shadow-xl text-xs">
                            <p className="text-gray-400 mb-1">{formatTimestamp(payload[0].payload.timestamp, 'date')}</p>
                            <p className="font-bold text-white">{formatCurrency(payload[0].value as number)}</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="var(--color-gaos-500)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Total P&L</p>
                <p className="text-lg font-semibold text-positive">{formatCurrency(mockPortfolio.totalPL)}</p>
              </div>
              <div className="text-center border-x border-white/5">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Risk Score</p>
                <p className="text-lg font-semibold text-warning">{mockPortfolio.riskScore}/100</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Diversification</p>
                <p className="text-lg font-semibold text-info">{mockPortfolio.diversificationScore}%</p>
              </div>
            </div>
          </Card>

          {/* Market Summary mini-bar */}
          <Card className="py-3 px-6">
            <div className="flex items-center justify-between gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Markets</span>
                <div className="h-4 w-[1px] bg-white/10 mx-2" />
              </div>
              
              <div className="flex items-center gap-6 flex-1 justify-around">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-positive" />
                  <span className="text-sm font-semibold">{mockMarketSummary.advancing}</span>
                  <span className="text-xs text-gray-500">Advancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-negative" />
                  <span className="text-sm font-semibold">{mockMarketSummary.declining}</span>
                  <span className="text-xs text-gray-500">Declining</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-info" />
                  <span className="text-sm font-semibold">{formatCompactCurrency(mockMarketSummary.totalVolume)}</span>
                  <span className="text-xs text-gray-500">Vol (24h)</span>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="text-gaos-400 h-8">
                View Markets <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar: Recommendations & Agent Status */}
        <div className="space-y-6">
          <Card className="flex flex-col h-full max-h-[600px]">
            <CardHeader 
              title="Agent Recommendations" 
              action={<Badge variant="agent">{mockRecommendations.length}</Badge>}
            />
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
              {mockRecommendations.map((rec) => (
                <div 
                  key={rec.id} 
                  className={cn(
                    "p-3 rounded-lg border transition-all cursor-pointer",
                    rec.read ? "bg-transparent border-white/5 opacity-60" : "bg-white/5 border-gaos-500/20 glass-panel-hover"
                  )}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        rec.type === 'opportunity' ? "bg-positive" : 
                        rec.type === 'risk' ? "bg-negative" : 
                        rec.type === 'rebalance' ? "bg-warning" : "bg-info"
                      )} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{rec.agentName}</span>
                    </div>
                    <span className="text-[10px] text-gray-600">{formatTimestamp(rec.timestamp)}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{rec.title}</h4>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">{rec.plainEnglishExplanation}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 font-medium">Confidence</span>
                      <span className="text-[10px] font-bold text-gaos-400">{rec.confidence}%</span>
                    </div>
                    {!rec.read && (
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px] text-gaos-400 hover:text-gaos-300">
                        Details
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="sm" className="mt-4 w-full text-xs">
              View All Insights
            </Button>
          </Card>

          <Card>
            <CardHeader title="Agent Activity" />
            <div className="space-y-3">
              {mockAgents.slice(0, 5).map((agent) => (
                <div key={agent.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-white",
                      agent.status === 'active' ? "bg-gaos-600/20 text-gaos-400" : "bg-surface-4 text-gray-500"
                    )}>
                      {agent.id === 'agent-1' ? <Info className="w-4 h-4" /> : 
                       agent.id === 'agent-2' ? <Zap className="w-4 h-4" /> :
                       agent.id === 'agent-3' ? <ShieldCheck className="w-4 h-4" /> :
                       <Activity className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">{agent.name}</p>
                      <p className="text-[10px] text-gray-600">{agent.status === 'active' ? 'Scanning markets...' : 'Idle'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={agent.status === 'active' ? 'positive' : 'default'}>
                      {agent.status === 'active' ? 'Live' : 'Idle'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
