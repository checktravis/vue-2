<template>
  <div class="infocard">
    <input v-model="firstname" placeholder="First Name">
    <input v-model="lastname" placeholder="Last Name">
    <p>First: {{ firstname }}</p>
    <p>Last: {{ lastname }}</p>
  </div>
</template>

<script src="./InfoCard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./InfoCard.css"></style>
