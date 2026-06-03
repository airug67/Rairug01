import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import LandingPage from '@pages/landing/LandingPage'
import DashboardPage from '@pages/dashboard/DashboardPage'
import MarketsPage from '@pages/markets/MarketsPage'
import OpportunitiesPage from '@pages/opportunities/OpportunitiesPage'
import PortfolioPage from '@pages/portfolio/PortfolioPage'
import StrategiesPage from '@pages/strategies/StrategiesPage'
import BacktestingPage from '@pages/backtesting/BacktestingPage'
import PaperTradingPage from '@pages/papertrading/PaperTradingPage'
import AlertsPage from '@pages/alerts/AlertsPage'
import ReportsPage from '@pages/reports/ReportsPage'
import SettingsPage from '@pages/settings/SettingsPage'
import SubscriptionsPage from '@pages/subscriptions/SubscriptionsPage'
import AdminPage from '@pages/admin/AdminPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/strategies" element={<StrategiesPage />} />
        <Route path="/backtesting" element={<BacktestingPage />} />
        <Route path="/paper-trading" element={<PaperTradingPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  )
}