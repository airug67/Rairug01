// ==========================================
// G A OS — Landing Page
// ==========================================

import { Link } from 'react-router-dom'
import { cn } from '@lib/utils'
import { ArrowRight, TrendingUp, Shield, Brain, BarChart3, PieChart, BookOpen, Workflow, Sparkles, Menu, X, ChevronDown, Star, Zap, Globe, Lock } from 'lucide-react'

const agents = [
  { icon: Brain, name: 'Market Intelligence', desc: 'Monitor global markets, news, and macro data in real-time across all asset classes.' },
  { icon: Zap, name: 'Opportunity Discovery', desc: 'Detect trends, breakouts, and arbitrage opportunities ranked by confidence score.' },
  { icon: Shield, name: 'Risk Management', desc: 'Position sizing, exposure limits, drawdown protection, and stop-loss planning.' },
  { icon: BarChart3, name: 'Execution', desc: 'Simulated order routing with slippage estimation and multi-broker connectivity.' },
  { icon: PieChart, name: 'Portfolio Agent', desc: 'Asset allocation, rebalancing suggestions, and diversification scoring.' },
  { icon: BookOpen, name: 'Learning Agent', desc: 'Analyze past trades, generate performance reports, and improve over time.' },
  { icon: Workflow, name: 'Strategy Builder', desc: 'Visual no-code strategy creation with backtesting and scenario analysis.' },
]

const features = [
  { icon: Globe, title: 'Multi-Asset Coverage', desc: 'Crypto, stocks, forex, commodities, ETFs, and futures — all in one workspace.' },
  { icon: Lock, title: 'Human-in-the-Loop', desc: 'You stay in control. Configurable automation levels from manual to fully automated.' },
  { icon: Star, title: 'Explainable AI', desc: 'Every recommendation comes with a plain-English explanation. No black boxes.' },
  { icon: Shield, title: 'Paper Trading First', desc: 'Test strategies risk-free in a simulated environment before going live.' },
]

const modes = [
  { name: 'Beginner', desc: 'Guided experience with simplified views and clear explanations.' },
  { name: 'Guided', desc: 'AI suggestions with training wheels — review before acting.' },
  { name: 'Advanced', desc: 'Full access to all agents, charts, and configuration.' },
  { name: 'Research', desc: 'Deep analytics sandbox for power users and institutions.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gaos-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                G A <span className="text-gaos-400">OS</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#agents" className="text-sm text-gray-400 hover:text-white transition-colors">Agents</a>
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
              <Link to="/dashboard" className="text-sm font-medium text-gaos-400 hover:text-gaos-300 transition-colors">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gaos-500/10 border border-gaos-500/20 text-gaos-300 text-xs font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Seven AI Agents • One Platform • Full Control
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Trade Smarter with{' '}
            <span className="bg-gradient-to-r from-gaos-400 to-gaos-200 bg-clip-text text-transparent">
              AI Intelligence
            </span>
            <br />
            Not Black Boxes
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            G A OS unifies crypto, stocks, forex, commodities, ETFs, and futures analysis into one workspace.
            Seven specialized AI agents work together with <span className="text-gray-200 font-medium">you in control</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gaos-600 hover:bg-gaos-500 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-gaos-500/25"
            >
              Launch Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#agents"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface-4 hover:bg-surface-5 text-gray-200 font-semibold text-lg transition-colors"
            >
              Meet the Agents <ChevronDown className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Asset Classes', value: '6' },
              { label: 'AI Agents', value: '7' },
              { label: 'Latency', value: '<100ms' },
              { label: 'Start Free', value: '$0' },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel p-4">
                <div className="text-2xl font-bold text-gaos-400">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4 bg-surface-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Seven Agents</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Each agent specializes in a different aspect of trading. Together, they form your personal trading intelligence team.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {agents.map((agent) => (
              <div key={agent.name} className="glass-panel p-5 glass-panel-hover group">
                <div className="w-10 h-10 rounded-lg bg-gaos-500/10 flex items-center justify-center mb-4 group-hover:bg-gaos-500/20 transition-colors">
                  <agent.icon className="w-5 h-5 text-gaos-400" />
                </div>
                <h3 className="font-semibold mb-1.5">{agent.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Modes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Four User Modes</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Whether you're just starting or managing institutional capital, G A OS adapts to your level.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modes.map((mode, i) => (
              <div key={mode.name} className={cn('glass-panel p-5 border-l-2', i === 0 ? 'border-l-green-500' : i === 1 ? 'border-l-gaos-500' : i === 2 ? 'border-l-warning' : 'border-l-info')}>
                <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Mode {i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{mode.name}</h3>
                <p className="text-sm text-gray-400">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-surface-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Serious Traders</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Institutional-grade tools without the institutional complexity.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-panel p-5 glass-panel-hover">
                <f.icon className="w-8 h-8 text-gaos-400 mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Freemium', price: '$0', desc: 'Get started risk-free', features: ['Basic dashboard', 'Delayed data', '1 agent', '3 positions max'] },
              { name: 'Starter', price: '$19', desc: 'For casual traders', features: ['Full dashboard', '15-min delayed data', '3 agents', '10 positions', 'Basic backtesting'], popular: false },
              { name: 'Pro', price: '$49', desc: 'For active traders', features: ['Real-time data', '5 agents', '50 positions', '1 broker connection', 'API access'], popular: true },
              { name: 'Elite', price: '$99', desc: 'For power users', features: ['Real-time all assets', 'All 7 agents', 'Unlimited positions', 'Multi-broker', 'Strategy Builder', 'Priority support'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={cn('glass-panel p-5 flex flex-col', plan.popular && 'border-gaos-500/40 relative')}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gaos-600 text-xs font-medium">Most Popular</div>
                )}
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold mb-1">{plan.price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <p className="text-xs text-gray-500 mb-4">{plan.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                      <Star className="w-3 h-3 text-gaos-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscriptions"
                  className={cn(
                    'inline-flex items-center justify-center py-2.5 rounded-lg text-sm font-medium transition-colors',
                    plan.popular ? 'bg-gaos-600 hover:bg-gaos-500 text-white' : 'bg-surface-4 hover:bg-surface-5 text-gray-200'
                  )}
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-gaos-400" />
            <span className="text-sm font-semibold">G A OS</span>
          </div>
          <p className="text-xs text-gray-600">© 2025 G A OS. AI-powered trading intelligence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}