import { db } from './database.js'
export async function registerApp(manifest) { if (!manifest?.id || !manifest?.name) throw new Error('Plugin manifest requires id and name'); await db.appRegistry.put({ ...manifest, enabled: true, registeredAt: new Date().toISOString() }); return manifest }
export async function unregisterApp(id) { return db.appRegistry.delete(id) }
export function getApps() { return db.appRegistry.toArray() }
