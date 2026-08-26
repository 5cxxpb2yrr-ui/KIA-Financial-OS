<script setup>
import { onMounted } from 'vue'
import { useFinanceStore } from '../../../stores/finance.js'
const finance = useFinanceStore()
onMounted(() => finance.load())
</script>
<template><section class="page"><div class="page-heading"><div><p class="mono">THE PAPER TRAIL</p><h1>Activity</h1><p>Transactions and changes across your financial life.</p></div><button class="action-btn">Import CSV</button></div><div class="card"><div class="card-heading"><div><h2>Recent transactions</h2><p>August 2026</p></div><span class="mono">FILTER⌄</span></div><div class="list"><div v-for="transaction in finance.transactions" :key="transaction.id" class="list-row"><div><strong>{{ transaction.merchant }}</strong><small>{{ transaction.category }} · {{ transaction.date }}</small></div><span class="amount negative">-{{ new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(transaction.amount) }}</span></div></div></div></section></template>
