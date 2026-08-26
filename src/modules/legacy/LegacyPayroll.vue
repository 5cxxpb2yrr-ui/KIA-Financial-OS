<script setup>
import { ref } from 'vue'
const frame = ref(null)
const reload = () => { if (frame.value) frame.value.src = `/legacy/KIA_PAYROLL_BUDGET_ENGINE.html?reload=${Date.now()}` }
</script>
<template>
  <section class="legacy-page"><div class="legacy-toolbar"><div><p class="mono">COMPATIBILITY MODE</p><h1>Payroll & Budget Engine</h1><p>Original application preserved while its business logic is migrated.</p></div><button class="action-btn" @click="reload">Reload legacy app</button></div><iframe ref="frame" title="KIA Payroll Budget Engine" src="/legacy/KIA_PAYROLL_BUDGET_ENGINE.html"></iframe></section>
</template>
<style scoped>.legacy-page{padding:28px 5.5% 40px;height:calc(100vh - 76px);display:flex;flex-direction:column}.legacy-toolbar{display:flex;justify-content:space-between;align-items:end;margin-bottom:18px;gap:16px}.legacy-toolbar h1{margin:5px 0;font-size:25px;letter-spacing:-.04em}.legacy-toolbar p:not(.mono){margin:0;color:var(--muted);font-size:12px}.legacy-page iframe{width:100%;flex:1;min-height:650px;border:1px solid var(--line);border-radius:9px;background:#0b1120}@media(max-width:650px){.legacy-page{padding:20px 15px;height:calc(100vh - 64px)}.legacy-toolbar{align-items:start;flex-direction:column}}
</style>
