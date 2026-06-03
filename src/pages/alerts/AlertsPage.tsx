// ==========================================
// G A OS — Alerts Page
// ==========================================

import { useState } from 'react'
import { SectionHeader, Card, CardHeader, Badge } from '@components/ui/index'
import { mockAlerts, mockRecommendations } from '@lib/mock-data'
import { formatTimestamp } from '@lib/utils'
import { Bell, BellOff, CheckCheck, AlertTriangle, Info, TrendingUp, Shield } from 'lucide-react'
import { cn } from '@lib/utils'

type AlertTab = 'all' | 'unread' | 'price' | 'agent' | 'risk'

export default function AlertsPage() {
  const [tab, setTab] = useState<AlertTab>('all')
  const allAlerts = [...mockAlerts, ...mockRecommendations.map(r => ({
    id: r.id,
    type: r.type === 'risk' ? 'risk' as const : 'agent' as const,
    title: r.title,
    message: r.plainEnglishExplanation,
    severity: r.type === 'risk' ? 'warning' as const : 'info' as const,
    assetId: r.assetIds?.[0],
    symbol: undefined,
    read: r.read,
    timestamp: r.timestamp,
  }))].sort((a, b) => b.timestamp - a.timestamp)

  const filtered = tab === 'all' ? allAlerts :
    tab === 'unread' ? allAlerts.filter(a => !a.read) :
    allAlerts.filter(a => a.type === tab)

  const unreadCount = allAlerts.filter(a => !a.read).length

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        title="Alerts"
        subtitle={`${unreadCount} unread alerts`}
        action={
          <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
            <CheckCheck className="w-4 h-4" /> Mark all read
          </button>
        }
      />

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-surface-3 rounded-lg p-1 w-fit">
        {(['all', 'unread', 'price', 'agent', 'risk'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors',
              tab === t ? 'bg-surface-4 text-white' : 'text-gray-500 hover:text-gray-300'
            )}
          >
            {t}
            {t === 'unread' && unreadCount > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-gaos-600 text-[10px]">{unreadCount}</span>
            )}
          </button>
        ))}
      </div>

      {/* Alert List */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <Card>
            <div className="flex flex-col items-center py-12 text-center">
              <BellOff className="w-8 h-8 text-gray-600 mb-3" />
              <p className="text-sm text-gray-500">No alerts to show</p>
            </div>
          </Card>
        ) : (
          filtered.map((alert) => (
            <Card key={alert.id} className={cn('flex items-start gap-3', !alert.read && 'border-l-gaos-500/40')}>
              <div className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                alert.severity === 'critical' ? 'bg-red-500/10' :
                alert.severity === 'warning' ? 'bg-yellow-500/10' : 'bg-gaos-500/10'
              )}>
                {alert.type === 'risk' ? <Shield className="w-4 h-4 text-warning" /> :
                 alert.type === 'price' ? <TrendingUp className="w-4 h-4 text-info" /> :
                 <Info className="w-4 h-4 text-gaos-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{alert.message}</p>
                  </div>
                  <span className="text-[10px] text-gray-600 whitespace-nowrap">{formatTimestamp(alert.timestamp)}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={alert.severity === 'warning' ? 'warning' : 'info'}>{alert.type}</Badge>
                  {!alert.read && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gaos-500" />
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}