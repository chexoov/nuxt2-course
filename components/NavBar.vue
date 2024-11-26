<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Nuxt js</a>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <nuxt-link exact active-class="active" class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <!-- no-prefetch - для lazy loading , nuxt под капотон загружает сразу все сылки в отдельные js файлы, а с помощью этого атрибута можно отключить это и 
             увеличить производительность -->
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/Users">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about">About </nuxt-link>
          </li> 
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a  class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    computed: {
      isAuth() {
        return this.$store.getters.isAuth
      }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    }
}

</script>
