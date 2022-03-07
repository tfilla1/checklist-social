<template>
  <div class="home">
    <Login v-if="!isAuthorized"/>
    <Account v-if="isAuthorized" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Account from '@/components/Account.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Account,
  },
  data: () => ({
    isAuthorized: false,
  })
}
</script>
