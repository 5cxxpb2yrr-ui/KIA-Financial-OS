export function financialScorecard({ savingsRate = 0, debtProgress = 0, budgetHealth = 0 }) { return Math.round((savingsRate + debtProgress + budgetHealth) / 3) }
