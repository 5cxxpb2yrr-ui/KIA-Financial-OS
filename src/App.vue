<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const mobileMenuOpen = ref(false)
const navItems = [
  { label: 'Overview', to: '/dashboard', icon: '◒' },
  { label: 'Accounts', to: '/accounts', icon: '▣' },
  { label: 'Planning', to: '/planning', icon: '⌁' },
  { label: 'Activity', to: '/activity', icon: '↗' },
]
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar" :class="{ 'is-open': mobileMenuOpen }">
      <div class="brand"><span class="brand-mark">K</span><span>KIA <small>FINANCIAL OS</small></span></div>
      <p class="eyebrow">PERSONAL OPERATING SYSTEM</p>
      <nav>
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-item" @click="mobileMenuOpen = false">
          <span class="nav-icon">{{ item.icon }}</span>{{ item.label }}
        </RouterLink>
      </nav>
      <div class="sidebar-bottom"><div class="sync-status"><span></span><div><strong>All synced</strong><small>Local-first storage</small></div></div><div class="user-chip"><span>JD</span><div><strong>Jordan Davis</strong><small>Personal workspace</small></div></div></div>
    </aside>
    <div v-if="mobileMenuOpen" class="scrim" @click="mobileMenuOpen = false"></div>
    <main class="main-content">
      <header class="topbar"><button class="menu-toggle" aria-label="Open navigation" @click="mobileMenuOpen = true">☰</button><div class="breadcrumb">Wednesday, August 26, 2026 <span>/</span> <strong>Good morning, Jordan</strong></div><div class="top-actions"><button class="icon-btn" aria-label="Notifications">♢<i></i></button><button class="avatar">JD</button></div></header>
      <RouterView />
    </main>
  </div>
</template>
