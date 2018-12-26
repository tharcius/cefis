<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    loadNotifications () {
      this.$store.dispatch('loadCourses')
    }
  },
  created: function () {
    this.loadNotifications()
    this.$forceUpdate()
    console.clear()
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0 3%;
  }
</style>
