<template>
  <v-container class="">
    <v-card align="center">
      <v-card-body>
        <v-col cols="4">
          <v-btn class="ma-2" color="githubBlue">
            <v-icon>mdi-github</v-icon>
            Sign in with Github</v-btn
          >
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="4">
          <v-btn class="ma-2" color="spotifyGreen">
            <v-icon>mdi-spotify</v-icon>
            Sign in with Spotify</v-btn
          >
        </v-col>
      </v-card-body>
    </v-card>
  </v-container>
</template>


<script>
export default {};
</script>

<style scoped>
.no-outline {
  border: none;
}

.btn {
  background-color: #c686f4;
  color: #000000;
  border: 4px solid black;
  padding: 10px 10px;
  margin: 10px 10px;
}
.btn-github {
  background-color: #4078c0;
  color: #f5f5f5;
}
.btn-spotify {
  background-color: #1db954;
  color: #ffffff;
}
</style>