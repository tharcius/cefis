export default {
  'COURSES_LOAD' (state, courses) {
    state.courses = courses.data
  },

  'COURSE_LOAD' (state, course) {
    state.course = course
  },
  'PRELOADER' (state, value) {
    state.preloader = value
  }
}
