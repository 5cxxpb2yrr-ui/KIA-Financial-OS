import { describe, expect, it } from 'vitest'
import { safeToSpend, calculateBudgetStatus } from '../src/services/engines/budgetEngine.js'
import { forecastDebt, orderDebts } from '../src/services/engines/payoffForecast.js'
import { calculateNetWorth } from '../src/services/engines/netWorthEngine.js'

describe('budget engine', () => {
  it('calculates safe to spend after obligations', () => expect(safeToSpend({ income: 5000, pendingBills: 1200, remainingBudgetRequirements: 800 })).toBe(3000))
  it('reports budget utilization', () => expect(calculateBudgetStatus({ budgeted: 1000, spent: 250 }).usedPercent).toBe(25))
})
describe('debt forecasting', () => {
  it('orders debt by avalanche and snowball', () => { const debts = [{ balance: 100, apr: 5 }, { balance: 400, apr: 25 }]; expect(orderDebts(debts)[0].apr).toBe(25); expect(orderDebts(debts, 'snowball')[0].balance).toBe(100) })
  it('pays a debt down with monthly interest', () => expect(forecastDebt({ balance: 1200, payment: 100, apr: 0 }).months).toBe(12))
})
describe('net worth engine', () => {
  it('separates assets and liabilities', () => expect(calculateNetWorth([{ type:'Savings', currentBalance:5000 }, { type:'Loan', currentBalance:1200 }])).toEqual({ assets:5000, liabilities:1200, netWorth:3800 }))
})
