export function debtReport(debts) { const total = debts.reduce((sum, debt) => sum + debt.balance, 0); return { total, count: debts.length, debts } }
