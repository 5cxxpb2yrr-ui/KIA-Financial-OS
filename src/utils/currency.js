export const formatCurrency = (value, maximumFractionDigits = 0) => new Intl.NumberFormat('en-US', { style:'currency', currency:'USD', maximumFractionDigits }).format(value)
