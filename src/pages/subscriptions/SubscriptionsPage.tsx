// ==========================================
// G A OS — Subscription Plans Page
// ==========================================

import { useState } from 'react'
import { SectionHeader, Card, Button, Badge } from '@components/ui/index'
import { mockPlans } from '@lib/mock-data'
import { Check, Star, ArrowRight } from 'lucide-react'
import { cn } from '@lib/utils'

export default function SubscriptionsPage() {
  const [annual, setAnnual] = useState(false)
  const [selected, setSelected] = useState('plan-pro')

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        title="Subscription Plans"
        subtitle="Choose the plan that fits your trading style"
        action={
          <div className="flex items-center gap-2 bg-surface-3 rounded-lg p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn('px-3 py-1.5 rounded-md text-xs font-medium transition-colors', !annual && 'bg-surface-4 text-white')}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn('px-3 py-1.5 rounded-md text-xs font-medium transition-colors', annual && 'bg-surface-4 text-white')}
            >
              Annual <span className="text-gaos-400">-17%</span>
            </button>
          </div>
        }
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockPlans.map((plan) => {
          const isSelected = selected === plan.id
          const price = annual ? plan.priceAnnual : plan.price
          const priceLabel = plan.tier === 'freemium' ? 'Free' : `$${price}/${annual ? 'yr' : 'mo'}`

          return (
            <Card
              key={plan.id}
              className={cn(
                'flex flex-col cursor-pointer transition-all',
                isSelected && 'ring-1 ring-gaos-500',
                plan.tier === 'pro' && 'relative'
              )}
              hover
            >
              {plan.tier === 'pro' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gaos-600 text-xs font-medium whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  {plan.tier === 'elite' && <Star className="w-4 h-4 text-warning" />}
                </div>
                <div className="text-3xl font-bold mb-1">{priceLabel}</div>
                <p className="text-xs text-gray-500 mb-4">
                  {plan.tier === 'freemium' && 'Get started with basic features'}
                  {plan.tier === 'starter' && 'For casual traders'}
                  {plan.tier === 'pro' && 'For active traders'}
                  {plan.tier === 'elite' && 'For power users'}
                </p>
                <div className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gaos-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant={isSelected ? 'primary' : 'secondary'}
                className="w-full"
                onClick={() => setSelected(plan.id)}
              >
                {isSelected ? 'Current Plan' : 'Select'} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          )
        })}
      </div>

      {/* Enterprise Section */}
      <Card className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold mb-1">Need Enterprise?</h3>
          <p className="text-sm text-gray-500">Custom plans for hedge funds, advisory firms, and institutions. White-label options available.</p>
        </div>
        <Button variant="secondary">Contact Sales</Button>
      </Card>
    </div>
  )
}