<template>
  <div>
    <div class="row">
      <div class="col-8">
        <a href="/" class="bg-light">Todos os Cursos</a>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="card bg-dark text-white text-center">
          <img class="card-img" :src="course.banner_base" alt="Imagem do card">
        </div>
      </div>
      <div class="col-4 card bg-light text-black-50 text-center">
        <h3 class="card-title">{{course.title}}</h3>
        <h6><strong>COM: {{course.teachers_names}}</strong></h6>
      </div>
    </div>
    <div class="row">
      <div class="col-8 card bg-light text-black-50 description">
        <p v-for="(lesson, key) in course.classes" :key="key">
          {{lesson.title}}
        </p>
      </div>
      <div class="col-4 card bg-light text-black-50 description">
        <p><strong>SOBRE O CURSO</strong></p>
        <p>{{course.resume}}</p>
        <p><strong>OBJETIVO GERAL</strong></p>
        <p>{{course.goal}}</p>
      </div>IndexCourse
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCourse',
  data () {
    return {
      id: this.$route.params['id']
    }
  },
  methods: {
    loadSelectedCourse (id) {
      this.$store.dispatch('loadCourse', id)
    }
  },
  created: function () {
    this.loadSelectedCourse(this.id)
  },
  computed: {
    course () {
      return this.$store.getters.course
    }
  }
}
</script>

<style scoped>
  .row{
    margin: .5rem .5rem;
  }
  .description{
    margin-top: 2rem;
    border-radius: 0;
    border: white solid 1px;
  }
  a{
    padding: .5rem;
    display: inline-flex;
    margin: .5rem 0;
    color: darkblue;
  }
</style>
