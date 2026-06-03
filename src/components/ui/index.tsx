// ==========================================
// G A OS — Reusable UI Components
// ==========================================

import { type ReactNode } from 'react'
import { cn } from '@lib/utils'

export function StatCard({
  label, value, change, changeLabel, icon, className
}: {
  label: string; value: string; change?: string; changeLabel?: string; icon?: ReactNode; className?: string
}) {
  const isPositive = change?.startsWith('+')
  const isNegative = change?.startsWith('-')
  return (
    <div className={cn('glass-panel p-4 flex flex-col gap-1.5', className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
        {icon && <span className="text-gaos-400">{icon}</span>}
      </div>
      <span className="text-2xl font-semibold tracking-tight">{value}</span>
      {change && (
        <div className="flex items-center gap-1.5">
          <span className={cn('text-sm font-medium', isPositive ? 'text-positive' : isNegative ? 'text-negative' : 'text-gray-400')}>
            {change}
          </span>
          {changeLabel && <span className="text-xs text-gray-500">{changeLabel}</span>}
        </div>
      )}
    </div>
  )
}

export function Badge({ variant = 'default', children }: { variant?: 'default' | 'positive' | 'negative' | 'warning' | 'info' | 'agent'; children: ReactNode }) {
  const styles = {
    default: 'bg-gray-700 text-gray-200',
    positive: 'bg-green-500/15 text-positive',
    negative: 'bg-red-500/15 text-negative',
    warning: 'bg-yellow-500/15 text-warning',
    info: 'bg-blue-500/15 text-info',
    agent: 'bg-gaos-500/15 text-gaos-300',
  }
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium', styles[variant])}>
      {children}
    </span>
  )
}

export function Button({ variant = 'primary', size = 'md', children, onClick, disabled, className, type = 'button' }: {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; size?: 'sm' | 'md' | 'lg'; children: ReactNode; onClick?: () => void; disabled?: boolean; className?: string; type?: 'button' | 'submit'
}) {
  const variants = {
    primary: 'bg-gaos-600 hover:bg-gaos-500 text-white disabled:opacity-40',
    secondary: 'bg-surface-4 hover:bg-surface-5 text-gray-200 disabled:opacity-40',
    ghost: 'hover:bg-surface-4 text-gray-300 disabled:opacity-40',
    danger: 'bg-red-600 hover:bg-red-500 text-white disabled:opacity-40',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn('inline-flex items-center justify-center font-medium rounded-lg transition-colors', variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}

export function Card({ children, className, hover = false }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={cn('glass-panel p-4', hover && 'glass-panel-hover', className)}>
      {children}
    </div>
  )
}

export function CardHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">{title}</h3>
      {action}
    </div>
  )
}

export function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function Toggle({ label, enabled, onChange }: { label: string; enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className={cn('relative w-10 h-5 rounded-full transition-colors', enabled ? 'bg-gaos-600' : 'bg-surface-5')}>
        <div className={cn('absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform', enabled && 'translate-x-5')} />
      </div>
      <span className="text-sm text-gray-300">{label}</span>
    </label>
  )
}

export function AgentStatusBar({ agents }: { agents: { id: string; name: string; status: string; confidence?: number }[] }) {
  return (
    <div className="flex items-center gap-4 px-4 py-1.5 bg-surface-2 border-t border-white/5 text-xs">
      <span className="text-gray-500 font-medium uppercase tracking-wider">Agents</span>
      {agents.map(a => (
        <div key={a.id} className="flex items-center gap-1.5">
          <span className={cn(
            'w-1.5 h-1.5 rounded-full',
            a.status === 'active' ? 'bg-positive animate-pulse-glow' :
            a.status === 'idle' ? 'bg-gray-500' :
            a.status === 'error' ? 'bg-negative' : 'bg-gray-600'
          )} />
          <span className="text-gray-400">{a.name}</span>
          {a.confidence && <span className="text-gray-600">{a.confidence}%</span>}
        </div>
      ))}
    </div>
  )
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-12 h-12 rounded-full bg-surface-4 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-300 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 max-w-sm">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}