import axios from 'axios'
import { URL_BASE } from '../../config/index'
const RESOURCE = 'event'

export default {
  loadPreloader (context) {
    context.commit('PRELOADER', false)
  },

  loadCourses (context) {
    context.commit('PRELOADER', false)
    axios.get(`${URL_BASE}${RESOURCE}`)
      .then(response => {
        context.commit('COURSES_LOAD', response.data)
        context.commit('PRELOADER', true)
      })
      .catch(error => {
        console.error(error)
      })
      .finally()
  },

  loadCourse (context, id) {
    context.commit('PRELOADER', false)
    axios.get(`${URL_BASE}${RESOURCE}/${id}?include=classes`)
      .then(response => {
        context.commit('COURSE_LOAD', response.data)
        context.commit('PRELOADER', true)
      })
      .catch(error => {
        console.error(error)
      })
      .finally()
  }
}
