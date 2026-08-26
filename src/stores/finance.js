import { defineStore } from 'pinia'
import { db } from '../core/database.js'
import { safeToSpend } from '../services/engines/budgetEngine.js'

export const useFinanceStore = defineStore('finance', {
  state: () => ({ accounts: [], bills: [], transactions: [], budgets: [], loaded: false }),
  getters: {
    currentCash: (state) => state.accounts.filter((a) => ['Checking','Savings','Cash','Emergency Fund'].includes(a.type)).reduce((sum, a) => sum + a.currentBalance, 0),
    totalAssets: (state) => state.accounts.filter((a) => !['Credit Card','Loan','Mortgage'].includes(a.type)).reduce((sum, a) => sum + a.currentBalance, 0),
    totalLiabilities: (state) => state.accounts.filter((a) => ['Credit Card','Loan','Mortgage'].includes(a.type)).reduce((sum, a) => sum + a.currentBalance, 0),
    safeToSpend() { return safeToSpend({ income: 6600, pendingBills: this.bills.reduce((sum, bill) => sum + bill.amount, 0), remainingBudgetRequirements: 920 }) },
    monthlySavings: (state) => state.transactions.filter((t) => t.category === 'Savings').reduce((sum, t) => sum + t.amount, 0),
    savingsRate() { return Math.round((this.monthlySavings / 6600) * 100) },
    upcomingBills: (state) => state.bills.slice(0, 4),
  },
  actions: {
    async load() { if (this.loaded) return; await db.open(); this.accounts = await db.accounts.toArray(); this.bills = await db.bills.toArray(); this.transactions = await db.transactions.orderBy('date').reverse().toArray(); this.budgets = await db.budgets.toArray(); this.loaded = true },
  },
})
