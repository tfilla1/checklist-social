<template>
  <v-app class="secondary--bg">
    <v-app-bar app color="primary" >
      <div class="d-flex align-center">checklist-social</div>

      <v-spacer></v-spacer>
      <div v-if="isAuthorized">
        Good Morning {{ user.name }}
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
  
  <script>
export default {
  components: {},
  name: "App",

  data: () => ({
    isAuthorized: true,
    user: {
      name: 'tom'
    }
  }),
};
</script>
  <style lang="scss">
.header {
  z-index: 1;
  position: relative;
}

.container {
  max-width: 1200px !important;
}
.w-0 {
  width: 0 !important;
}
.w-100 {
  width: 100%;
}
</style>