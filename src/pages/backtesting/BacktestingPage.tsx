import React from 'react'

export default function BacktestingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Backtesting</h1>
      </div>
      <div className="glass-panel p-8 border border-white/5 bg-surface-2/50 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-300 mb-2">Workspace in Development</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            The Backtesting intelligence module is currently being calibrated by the GA OS team. 
            Real-time data feeds and agent integration will be available shortly.
          </p>
        </div>
      </div>
    </div>
  )
}
