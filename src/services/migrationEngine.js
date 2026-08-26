export const CURRENT_BACKUP_VERSION = 1
export function validateBackupVersion(backup) { return Number(backup?.metadata?.version) <= CURRENT_BACKUP_VERSION }
export function migrateBackup(backup) { if (!validateBackupVersion(backup)) throw new Error('Backup is newer than this application'); return backup }
