import axios from 'axios'
import { URL_BASE } from '../../config/index'
const RESOURCE = 'course'

export default {
  loadNotifications (context) {
    axios.get(`${URL_BASE}${RESOURCE}`)
      .then(response => {
        context.commit('COURSES_LOAD', response.data)
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error)
      })
      .finally()
  }
}