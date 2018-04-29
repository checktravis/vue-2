<template>
  <div id="app">
    <valid-form v-for="n in 3" :key="n"/>
  </div>
</template>

<script>
// export default {
//  name: 'App',
// };

// import InfoCard from './components/InfoCard/InfoCard.vue';
import validForm from './components/valid-form/valid-form.vue';

export default {
  name: 'app',
  components: {
    validForm,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
