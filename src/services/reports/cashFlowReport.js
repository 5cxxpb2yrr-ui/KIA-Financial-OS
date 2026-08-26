export function cashFlowReport(transactions, income = 0) { const outflow = transactions.reduce((sum, item) => sum + item.amount, 0); return { income, outflow, net: income - outflow } }
