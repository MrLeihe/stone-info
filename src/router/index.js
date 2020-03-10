import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/normal',
      name: 'normal',
      /* lazy load */
      component: () => import(/* webpackChunkName: "group-foo" */ '@/components/pages/page-normal.vue')
    },
    {
      path: '/job',
      name: 'Job',
      /* lazy load */
      component: () => import(/* webpackChunkName: "group-foo" */ '@/components/pages/page-job.vue')
    },
    {
      path: '/acg',
      name: 'acg',
      /* lazy load */
      component: () => import(/* webpackChunkName: "group-foo" */ '@/components/pages/page-acg.vue')
    },
    {
      path: '/about',
      name: 'About',
      /* lazy load */
      component: () => import(/* webpackChunkName: "group-foo" */ '@/components/pages/page-about.vue')
    },
  ]
})
