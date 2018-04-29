<template>
<!-- action="https://vuejs.org/" method="post" @submit="checkForm" -->
  <form class="valid-form">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
    <input v-model="firstname" placeholder="First Name">
    <input v-model="lastname" placeholder="Last Name">
    <p>First: {{ firstname }}</p>
    <p>Last: {{ lastname }}</p>
    <p>
      <input @click="checkForm" type="submit" value="Submit">
    </p>
  </form>
</template>

<script src="./valid-form.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./valid-form.css"></style>
