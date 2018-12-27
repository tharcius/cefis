import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/Main/IndexMain'
import IndexCourse from '@/components/Course/IndexCourse'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Index', component: IndexMain},
    {path: '/curso/:id', name: 'Course', component: IndexCourse},
    {path: '*', component: IndexMain}

  ]
})
