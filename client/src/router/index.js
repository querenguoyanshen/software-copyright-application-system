import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../views/Login.vue') },
  {
    path: '/home',
    component: () => import('../AppLayout.vue'),
    children: [
      { path: '', component: () => import('../views/Home.vue'), meta: { title: '首页' } },
      { path: '/situation', component: () => import('../views/Situation.vue'), meta: { title: '态势感知' } },
      { path: '/regions', component: () => import('../views/Crud.vue'), meta: { type: 'regions', title: '区域管理' } },
      { path: '/orgs', component: () => import('../views/Crud.vue'), meta: { type: 'orgs', title: '组织管理' } },
      { path: '/apps', component: () => import('../views/Apps.vue'), meta: { title: '应用管理' } },
      { path: '/intents', component: () => import('../views/Intents.vue'), meta: { title: '意图策略管理' } },
      { path: '/logs', component: () => import('../views/Logs.vue'), meta: { title: '日志审计', role: 'auditor' } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  if (to.path !== '/login' && !user) {
    return '/login'
  }

  if (to.meta.role && user?.role !== to.meta.role) {
    return '/home'
  }
})

export default router
