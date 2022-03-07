<template>
  <v-container v-if="isAuthorized">
    <v-card align="center">
      <v-card-body> hello, {{ user.name }} </v-card-body>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    isAuthorized: true,
    user: {
      name: "tom",
      avatar: "test",
      lists: [],
    },
  }),
};
</script>
<style scoped>
</style>