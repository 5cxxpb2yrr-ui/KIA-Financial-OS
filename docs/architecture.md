# KIA Financial OS architecture

The app is a Vue 3 Composition API PWA. `src/core/database.js` owns the Dexie `KIA_FOS_DB` schema and seed lifecycle. Pinia stores expose reactive application state while pure engines under `src/services/engines` calculate budgets, debt payoff, net worth, allocations, and forecasts without UI dependencies.

Plugins register a manifest through `src/core/pluginRegistry.js`. Compatibility checks are deliberately explicit for manifest, routes, store, runtime, backup, and restore. JSON backup export includes all registered stores plus metadata and a version for migration validation.

The UI is mobile-first and local-first. IndexedDB is the source of truth; the service worker provides the application shell cache for offline startup.
