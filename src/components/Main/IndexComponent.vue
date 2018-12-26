<template>
  <div class="row">
    <div class="card bg-dark text-white" v-for="(course, key) in getCourses" :key="key" style="width: 18rem;">
      <img class="card-img-top img-fluid" :src="course.banner" :alt="course.title">
      <div class="card-img-overlay">
        <h5 class="card-title">{{course.title}}</h5>
      </div>
      <a :href="'/curso/' + course.id">
        <div class="card-link">
          &nbsp;
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',
  data () {
    return {
      a: [1, 2, 3]
    }
  },
  computed: {
    getCourses () {
      return this.$store.getters.courses
    }
  }
}
</script>

<style scoped>
  .card{
    margin: .5rem auto;
    float: none;
    overflow: hidden;
    max-height: 12rem;
  }

  .card-img-overlay{
    padding: 0;
  }

  .card-title {
    background: #191B27;
    text-align: left;
    padding: .5rem;
  }

  .card-link {
    height: 100%;
    width: 100%;
    z-index: 15;
    position: absolute;
    top: 0;
  }

  .card-link:hover{
    background: rgba(100,100,100,.3);
  }
</style>
