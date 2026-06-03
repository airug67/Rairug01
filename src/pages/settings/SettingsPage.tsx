// ==========================================
// G A OS — Settings Page
// ==========================================

import { useState } from 'react'
import { SectionHeader, Card, CardHeader, Toggle, Button } from '@components/ui/index'
import { User, Bell, Shield, Palette, Globe, Key, Sliders } from 'lucide-react'

type UserMode = 'beginner' | 'guided' | 'advanced' | 'research'
type AutomationLevel = 'manual' | 'semi-automated' | 'automated'

export default function SettingsPage() {
  const [mode, setMode] = useState<UserMode>('guided')
  const [automation, setAutomation] = useState<AutomationLevel>('semi-automated')
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [pushAlerts, setPushAlerts] = useState(true)
  const [dailyReport, setDailyReport] = useState(false)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SectionHeader title="Settings" subtitle="Configure your G A OS experience" />

      {/* User Mode */}
      <Card>
        <CardHeader title="User Mode" action={<User className="w-4 h-4 text-gaos-400" />} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['beginner', 'guided', 'advanced', 'research'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`p-3 rounded-lg border text-left transition-all ${
                mode === m
                  ? 'border-gaos-500 bg-gaos-500/10'
                  : 'border-surface-5 hover:border-surface-5/60'
              }`}
            >
              <div className="text-sm font-medium capitalize">{m}</div>
              <div className="text-xs text-gray-500 mt-1">
                {m === 'beginner' && 'Simplified views'}
                {m === 'guided' && 'AI suggestions'}
                {m === 'advanced' && 'Full access'}
                {m === 'research' && 'Deep analytics'}
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Automation Level */}
      <Card>
        <CardHeader title="Automation Level" action={<Sliders className="w-4 h-4 text-gaos-400" />} />
        <div className="space-y-3">
          {(['manual', 'semi-automated', 'automated'] as const).map((a) => (
            <label key={a} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-surface-3 transition-colors">
              <input
                type="radio"
                name="automation"
                checked={automation === a}
                onChange={() => setAutomation(a)}
                className="accent-gaos-500"
              />
              <div>
                <div className="text-sm font-medium capitalize">{a}</div>
                <div className="text-xs text-gray-500">
                  {a === 'manual' && 'You review and approve every action'}
                  {a === 'semi-automated' && 'AI suggests, you approve'}
                  {a === 'automated' && 'AI executes within your risk limits'}
                </div>
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* Risk Limits */}
      <Card>
        <CardHeader title="Risk Limits" action={<Shield className="w-4 h-4 text-gaos-400" />} />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Daily Loss Limit', value: '3%', desc: 'Stop trading after 3% daily loss' },
            { label: 'Max Position Size', value: '25%', desc: 'Max 25% of portfolio per position' },
            { label: 'Max Leverage', value: '2x', desc: 'Maximum leverage allowed' },
            { label: 'Default Stop Loss', value: '5%', desc: 'Default stop loss distance' },
          ].map((r) => (
            <div key={r.label} className="p-3 rounded-lg bg-surface-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">{r.label}</span>
                <span className="text-sm font-semibold text-gaos-400">{r.value}</span>
              </div>
              <p className="text-xs text-gray-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Alert Preferences */}
      <Card>
        <CardHeader title="Alert Preferences" action={<Bell className="w-4 h-4 text-gaos-400" />} />
        <div className="space-y-3">
          <Toggle label="Email notifications" enabled={emailAlerts} onChange={setEmailAlerts} />
          <Toggle label="Push notifications" enabled={pushAlerts} onChange={setPushAlerts} />
          <Toggle label="Daily portfolio report" enabled={dailyReport} onChange={setDailyReport} />
        </div>
      </Card>

      {/* Theme & Language */}
      <Card>
        <CardHeader title="Appearance" action={<Palette className="w-4 h-4 text-gaos-400" />} />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-3 border border-surface-4">
            <Palette className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Dark Mode (default)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-3 border border-surface-4">
            <Globe className="w-4 h-4 text-gray-400" />
            <select className="bg-transparent text-sm text-gray-300 border-none outline-none">
              <option>English</option>
              <option>中文</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </Card>

      {/* API Access */}
      <Card>
        <CardHeader title="API Access" action={<Key className="w-4 h-4 text-gaos-400" />} />
        <p className="text-sm text-gray-500 mb-4">API access is available on Pro and Elite plans.</p>
        <Button variant="secondary" size="sm">Upgrade to Pro</Button>
      </Card>

      {/* Save */}
      <div className="flex justify-end">
        <Button>Save Settings</Button>
      </div>
    </div>
  )
}