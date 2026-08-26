<script setup>
import { onMounted } from 'vue'
import { useFinanceStore } from '../../../stores/finance.js'
const finance = useFinanceStore()
onMounted(() => finance.load())
const money = (v) => new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(v)
</script>
<template><section class="page"><div class="page-heading"><div><p class="mono">MONEY MAP</p><h1>Accounts</h1><p>Every balance, asset, and liability in one place.</p></div><button class="action-btn">+ Add account</button></div><div class="card"><div class="card-heading"><div><h2>All accounts</h2><p>{{ finance.accounts.length }} connected accounts</p></div><span class="mono">TOTAL {{ money(finance.totalAssets) }}</span></div><div class="list"><div v-for="account in finance.accounts" :key="account.id" class="list-row"><div><strong>{{ account.name }}</strong><small>{{ account.institution }} · {{ account.type }}</small></div><span class="amount" :class="{ negative: account.type === 'Credit Card' }">{{ money(account.currentBalance) }}</span></div></div></div></section></template>
