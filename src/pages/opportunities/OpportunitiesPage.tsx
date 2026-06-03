// ==========================================
// G A OS — Opportunities Page
// ==========================================

import { SectionHeader, Card, CardHeader, Badge, Button } from '@components/ui/index'
import { mockRecommendations } from '@lib/mock-data'
import { formatTimestamp } from '@lib/utils'
import { TrendingUp, TrendingDown, Zap, RefreshCw, Target } from 'lucide-react'
import { cn } from '@lib/utils'

export default function OpportunitiesPage() {
  const opportunities = mockRecommendations.filter(r => r.type === 'opportunity')
  const insights = mockRecommendations.filter(r => r.type !== 'opportunity')

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Opportunities"
        subtitle="AI-detected trading opportunities ranked by confidence"
        action={
          <Button variant="secondary" size="sm">
            <RefreshCw className="w-4 h-4 mr-1.5" /> Refresh
          </Button>
        }
      />

      {/* High Confidence Opportunities */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Active Opportunities</h3>
        <div className="space-y-3">
          {opportunities.length === 0 ? (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Target className="w-8 h-8 text-gray-600 mb-3" />
                <p className="text-sm text-gray-500">No active opportunities right now. Check back soon.</p>
              </div>
            </Card>
          ) : (
            opportunities.map((opp) => (
              <Card key={opp.id} className="glass-panel-hover">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                    opp.confidence >= 80 ? 'bg-green-500/10' : opp.confidence >= 60 ? 'bg-yellow-500/10' : 'bg-gaos-500/10'
                  )}>
                    <Zap className={cn(
                      'w-5 h-5',
                      opp.confidence >= 80 ? 'text-positive' : opp.confidence >= 60 ? 'text-warning' : 'text-gaos-400'
                    )} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold">{opp.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{opp.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className={cn(
                          'text-lg font-bold',
                          opp.confidence >= 80 ? 'text-positive' : opp.confidence >= 60 ? 'text-warning' : 'text-gaos-400'
                        )}>
                          {opp.confidence}%
                        </div>
                        <div className="text-[10px] text-gray-600 uppercase tracking-wider">Confidence</div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 rounded-lg bg-surface-3 border border-surface-4">
                      <p className="text-xs text-gray-400 italic">
                        💡 {opp.plainEnglishExplanation}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="agent">{opp.agentName}</Badge>
                        <span className="text-[10px] text-gray-600">{formatTimestamp(opp.timestamp)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {opp.action && (
                          <Button variant="primary" size="sm">{opp.action}</Button>
                        )}
                        <Button variant="ghost" size="sm">Dismiss</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* AI Insights */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">AI Market Insights</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {insights.map((insight) => (
            <Card key={insight.id} className="glass-panel-hover">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gaos-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-gaos-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium">{insight.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                  <div className="mt-2 p-2 rounded bg-surface-3">
                    <p className="text-xs text-gray-400 italic">💡 {insight.plainEnglishExplanation}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="agent">{insight.agentName}</Badge>
                    <span className="text-[10px] text-gray-600">{formatTimestamp(insight.timestamp)}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}