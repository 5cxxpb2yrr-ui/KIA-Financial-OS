import Dexie from 'dexie'

export const STORE_NAMES = ['settings','accounts','bills','transactions','paychecks','paycheckSchedules','budgets','budgetTemplates','paymentHistory','chargeHistory','goals','merchantRules','netWorthSnapshots','calendarEvents','reminders','notifications','appRegistry','auditLog','imports']
export const db = new Dexie('KIA_FOS_DB')
db.version(1).stores({ settings:'id', accounts:'id, type', bills:'id, dueDay, frequency', transactions:'id, date, category, merchant', paychecks:'id, date', paycheckSchedules:'id, frequency', budgets:'id, category', budgetTemplates:'id', paymentHistory:'id, accountId, paymentDate', chargeHistory:'id, accountId', goals:'id, targetDate', merchantRules:'id, merchant', netWorthSnapshots:'id, date', calendarEvents:'id, date, type', reminders:'id, date, type', notifications:'id, date, read', appRegistry:'id, enabled', auditLog:'id, date', imports:'id, date' })

const seed = {
  accounts: [{ id:'checking', name:'Everyday Checking', institution:'Northstar Bank', type:'Checking', currentBalance:7420, startingBalance:6800 }, { id:'savings', name:'Rainy Day Fund', institution:'Northstar Bank', type:'Savings', currentBalance:12800, startingBalance:10000 }, { id:'credit', name:'Everyday Card', institution:'Amex', type:'Credit Card', currentBalance:1680, startingBalance:0, creditLimit:8000 }],
  bills: [{ id:'rent', name:'Home rent', amount:1850, frequency:'Monthly', due:'Sep 01', dueDay:1, category:'Housing', autopay:true }, { id:'power', name:'Power & utilities', amount:142, frequency:'Monthly', due:'Sep 04', dueDay:4, category:'Utilities', autopay:true }, { id:'internet', name:'Internet', amount:74, frequency:'Monthly', due:'Sep 08', dueDay:8, category:'Internet', autopay:true }, { id:'insurance', name:'Auto insurance', amount:128, frequency:'Monthly', due:'Sep 12', dueDay:12, category:'Insurance', autopay:true }],
  transactions: [{ id:'t1', merchant:'Whole Foods Market', amount:124.32, category:'Groceries', date:'Aug 25' }, { id:'t2', merchant:'Shell Station', amount:52.18, category:'Gas', date:'Aug 24' }, { id:'t3', merchant:'Netflix', amount:22.99, category:'Other', date:'Aug 22' }, { id:'t4', merchant:'Transfer to savings', amount:650, category:'Savings', date:'Aug 20' }],
  budgets: [{ id:'groceries', name:'Groceries', used:62 }, { id:'dining', name:'Dining out', used:78 }, { id:'transport', name:'Transport', used:41 }],
}
export async function seedDatabase() { for (const [table, rows] of Object.entries(seed)) { if (await db[table].count() === 0) await db[table].bulkAdd(rows) } }
db.on('ready', seedDatabase)
