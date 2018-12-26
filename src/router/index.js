import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/Main/IndexComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'Index', component: IndexComponent
    }
  ]
})
