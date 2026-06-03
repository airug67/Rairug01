// ==========================================
// G A OS — Admin Panel
// ==========================================

import { SectionHeader, Card, CardHeader, Badge, Button, StatCard } from '@components/ui/index'
import { mockAgents, mockPortfolio } from '@lib/mock-data'
import { cn } from '@lib/utils'
import { Activity, Users, TrendingUp, AlertTriangle, Settings, Play, Pause, RefreshCw } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Admin Panel" subtitle="System management and monitoring" />

      {/* System Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Active Users" value="1,247" change="+12.3%" changeLabel="vs last week" />
        <StatCard label="Active Agents" value={mockAgents.filter(a => a.status === 'active').length.toString()} change={`${mockAgents.length} total`} />
        <StatCard label="Paper Trades (24h)" value="342" change="+8.1%" changeLabel="vs yesterday" />
        <StatCard label="System Uptime" value="99.97%" change="Operational" />
      </div>

      {/* Agent Management */}
      <Card>
        <CardHeader title="Agent Management" action={<Settings className="w-4 h-4 text-gaos-400" />} />
        <div className="space-y-2">
          {mockAgents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-3 rounded-lg bg-surface-3">
              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-2 h-2 rounded-full',
                  agent.status === 'active' ? 'bg-positive' :
                  agent.status === 'idle' ? 'bg-gray-500' :
                  agent.status === 'error' ? 'bg-negative' : 'bg-gray-600'
                )} />
                <div>
                  <span className="text-sm font-medium">{agent.name}</span>
                  <span className="text-xs text-gray-500 ml-2 capitalize">{agent.status}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {agent.confidence && (
                  <span className="text-xs text-gray-500">{agent.confidence}% confidence</span>
                )}
                <button className="p-1.5 rounded hover:bg-surface-4 text-gray-400 hover:text-white transition-colors">
                  {agent.status === 'active' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button className="p-1.5 rounded hover:bg-surface-4 text-gray-400 hover:text-white transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Activity Log */}
      <Card>
        <CardHeader title="Recent Activity" action={<Activity className="w-4 h-4 text-gaos-400" />} />
        <div className="space-y-2">
          {[
            { time: '2 min ago', event: 'Risk Management agent updated position limits', type: 'system' },
            { time: '15 min ago', event: 'User #1247 placed paper trade: BUY 0.1 BTC @ $67,845', type: 'trade' },
            { time: '1h ago', event: 'Market Intelligence agent detected FOMC sentiment shift', type: 'agent' },
            { time: '3h ago', event: 'New user registration: pro plan', type: 'user' },
            { time: '6h ago', event: 'Strategy "Golden Cross Momentum" backtest completed', type: 'system' },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded text-sm">
              <span className="text-[10px] text-gray-600 w-16 flex-shrink-0">{log.time}</span>
              <Badge variant="default">{log.type}</Badge>
              <span className="text-gray-400">{log.event}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Emergency Controls */}
      <Card className="border-red-500/20">
        <CardHeader title="Emergency Controls" action={<AlertTriangle className="w-4 h-4 text-negative" />} />
        <p className="text-sm text-gray-500 mb-4">Emergency stop will immediately halt all automated trading and close open positions.</p>
        <div className="flex items-center gap-3">
          <Button variant="danger" size="lg">
            <AlertTriangle className="w-4 h-4 mr-2" /> Emergency Stop All
          </Button>
          <Button variant="secondary" size="lg">
            <Settings className="w-4 h-4 mr-2" /> System Settings
          </Button>
        </div>
      </Card>
    </div>
  )
}