import React, { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  TrendingUp, 
  Zap, 
  PieChart, 
  Settings, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  Terminal, 
  History, 
  Users, 
  Search, 
  Bell, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  Cpu,
  Activity,
  User,
  ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { UserMode } from '@/types'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Markets', href: '/markets', icon: TrendingUp },
  { name: 'Opportunities', href: '/opportunities', icon: Zap },
  { name: 'Portfolio', href: '/portfolio', icon: PieChart },
  { name: 'Strategies', href: '/strategies', icon: Cpu },
  { name: 'Backtesting', href: '/backtesting', icon: History },
  { name: 'Paper Trading', href: '/paper-trading', icon: Terminal },
  { name: 'Alerts', href: '/alerts', icon: AlertCircle },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Admin', href: '/admin', icon: ShieldCheck },
]

const agents = [
  { id: 'market-intel', name: 'Market Intel', status: 'active' },
  { id: 'opp-discovery', name: 'Opp Discovery', status: 'active' },
  { id: 'risk-mgmt', name: 'Risk Mgmt', status: 'active' },
  { id: 'execution', name: 'Execution', status: 'idle' },
  { id: 'portfolio', name: 'Portfolio', status: 'active' },
  { id: 'learning', name: 'Learning', status: 'active' },
  { id: 'strategy-builder', name: 'Strategy Builder', status: 'active' },
]

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [userMode, setUserMode] = useState<UserMode>('guided')
  const location = useLocation()

  // Handle auto-collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true)
      } else {
        setIsSidebarCollapsed(false)
      }
    }

    // Set initial state
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-screen w-full flex-col bg-surface text-slate-200 overflow-hidden font-sans selection:bg-gaos-500/30">
      {/* Top Header */}
      <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 glass-panel rounded-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gaos-600 rounded-lg flex items-center justify-center shadow-lg shadow-gaos-500/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden md:block">
              G A <span className="text-gaos-500">OS</span>
            </span>
          </div>

          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden md:block" />

          {/* User Mode Selector */}
          <div className="flex items-center bg-surface-3 p-1 rounded-md border border-white/5">
            {(['beginner', 'guided', 'advanced', 'research'] as UserMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setUserMode(mode)}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded capitalize transition-all",
                  userMode === mode 
                    ? "bg-gaos-600 text-white shadow-sm" 
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search markets, agents..." 
              className="bg-surface-2 border border-white/5 rounded-md py-1.5 pl-9 pr-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-gaos-500/50 transition-all"
            />
          </div>
          
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-gaos-500 rounded-full border-2 border-surface" />
          </button>
          
          <div className="h-8 w-[1px] bg-white/10 mx-1" />
          
          <button className="flex items-center gap-2 p-1.5 rounded-full bg-surface-3 border border-white/5 hover:bg-surface-4 transition-colors">
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
              <User className="w-4 h-4 text-slate-300" />
            </div>
            <span className="text-xs font-medium pr-1 hidden lg:block text-slate-300">Trader Alpha</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={cn(
            "flex flex-col border-r border-white/5 bg-surface-2 transition-all duration-300 ease-in-out",
            isSidebarCollapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all group relative",
                    isActive 
                      ? "bg-gaos-600/10 text-gaos-400" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {location.pathname === item.href && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gaos-500 rounded-r-full" />
                  )}
                  <item.icon className={cn(
                    "w-5 h-5 flex-shrink-0 transition-colors",
                    location.pathname === item.href ? "text-gaos-500" : "group-hover:text-white"
                  )} />
                  {!isSidebarCollapsed && <span>{item.name}</span>}
                </NavLink>
              ))}
            </nav>
          </div>

          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-4 border-t border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
          >
            {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : (
              <div className="flex items-center gap-2 w-full">
                <ChevronLeft className="w-5 h-5" />
                <span className="text-xs font-medium">Collapse Sidebar</span>
              </div>
            )}
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-surface">
          <div className="flex-1 overflow-y-auto p-6 animate-slide-up">
            <Outlet />
          </div>

          {/* Agent Status Bar */}
          <footer className="h-10 border-t border-white/5 bg-surface-2 flex items-center px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 mr-2">
                <div className="w-2 h-2 rounded-full bg-positive animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">System Live</span>
              </div>
              
              <div className="h-4 w-[1px] bg-white/10" />
              
              <div className="flex items-center gap-6">
                {agents.map((agent) => (
                  <div key={agent.id} className="flex items-center gap-2 group cursor-help">
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      agent.status === 'active' ? "bg-gaos-500" : "bg-slate-600"
                    )} />
                    <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                      {agent.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center gap-6 pr-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Latency</span>
                <span className="text-[11px] font-mono text-positive">12ms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">API</span>
                <span className="text-[11px] font-mono text-positive">Online</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
