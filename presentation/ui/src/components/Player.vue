<template>
  <v-container class="">
    <v-card align="center">
      <v-card-title> Currently Playing: </v-card-title>
      <v-card-subtitle>
        {{ artist }} <br>
        {{ song }} <br>
        {{ album }} ({{ year }})
      </v-card-subtitle>
      <v-card-body> </v-card-body>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Player",
  data: () => ({
    url: "",
    artist: 'slightly stoopid',
    song: 'leaving on a jetplane',
    album: 'everything you need',
    year: 2003
  }),
};
</script>

<style scoped>
</style>