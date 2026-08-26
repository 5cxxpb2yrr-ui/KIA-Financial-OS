import { calculateBudgetStatus } from '../engines/budgetEngine.js'
export function budgetReport(rows) { return rows.map(({ budgeted, spent, ...row }) => ({ ...row, ...calculateBudgetStatus({ budgeted, spent }) })) }
