import Vue from 'vue'
import Vuex from 'vuex'
import Courses from './modules/courses/index'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Courses
  }
})
