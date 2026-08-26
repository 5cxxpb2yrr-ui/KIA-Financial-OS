import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../modules/dashboard/pages/DashboardView.vue'
import AccountsView from '../modules/accounts/pages/AccountsView.vue'
import PlanningView from '../modules/planning/pages/PlanningView.vue'
import ActivityView from '../modules/activity/pages/ActivityView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: DashboardView },
    { path: '/accounts', component: AccountsView },
    { path: '/planning', component: PlanningView },
    { path: '/activity', component: ActivityView },
  ],
})
