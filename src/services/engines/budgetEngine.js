export function calculateBudgetStatus({ budgeted, spent }) { return { budgeted, spent, remaining: Math.max(budgeted - spent, 0), usedPercent: budgeted ? Math.round((spent / budgeted) * 100) : 0 } }
export function safeToSpend({ income, pendingBills, remainingBudgetRequirements }) { return Math.max(income - pendingBills - remainingBudgetRequirements, 0) }
