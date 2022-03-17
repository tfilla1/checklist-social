<template>
  <v-container class="githubGrey">
    <v-card align="center">
      <v-img src="https://picsum.photos/350/165?random"></v-img>
      <v-card-title> Currently Playing: </v-card-title>
      <v-card-subtitle>
        {{ artist }} <br>
        {{ song }} <br>
        {{ album }} ({{ year }})
      </v-card-subtitle>
      <v-card-text> 
          some text here
      </v-card-text>
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
    year: 2003,
    image: '../assets/everything-you-need.jpeg'
  }),
};
</script>

<style scoped>
</style>