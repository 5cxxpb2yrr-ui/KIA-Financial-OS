export function recurringDate(day, month = new Date().getMonth(), year = new Date().getFullYear()) { return new Date(year, month, day).toISOString().slice(0, 10) }
export function billEvents(bills) { return bills.map((bill) => ({ id:`bill-${bill.id}`, type:'bill', title:bill.name, amount:bill.amount, date:recurringDate(bill.dueDay) })) }
