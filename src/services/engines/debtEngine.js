import { orderDebts, forecastDebt } from './payoffForecast.js'
export function debtPlan(debts, method = 'avalanche') { const ordered = orderDebts(debts, method); return { method, nextTarget: ordered[0] || null, forecasts: ordered.map((debt) => ({ ...debt, forecast: forecastDebt(debt) })) } }
