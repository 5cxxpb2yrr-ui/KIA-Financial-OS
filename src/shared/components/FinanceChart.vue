<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
const props = defineProps({ type: { type: String, default: 'line' }, labels: { type: Array, required: true }, datasets: { type: Array, required: true } })
const canvas = ref(null)
let chart
onMounted(() => { chart = new Chart(canvas.value, { type: props.type, data: { labels: props.labels, datasets: props.datasets }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { color: '#9aa9a0', font: { family: 'DM Mono', size: 9 } } }, y: { grid: { color: '#edf1ed' }, ticks: { color: '#9aa9a0', font: { family: 'DM Mono', size: 9 } } } } } }) })
onUnmounted(() => chart?.destroy())
</script>
<template><div style="height:180px"><canvas ref="canvas"></canvas></div></template>
