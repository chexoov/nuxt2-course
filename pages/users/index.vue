<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">
          User: {{ user.name }} ({{ user.email }})</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
//   // пример с асинхронным запросом (с помощью промиса), эта страница загрузится с задержкой в 3с после загрузки данных с бека
//   async asyncData({ $axios, error, store }) {
//     // return new Promise(resolve => {
//     //     setTimeout(() => {
//     //         resolve({
//     //             users: [1,2,3,4,5]
//     //         })
//     //     }, 3000)
//     // })
//     // return $axios.$get('https://jsonplaceholder.typicode.com/users')
//     // .then(users => {
//     //     return {
//     //         users
//     //     }
//     // })
//     // .catch(err => {
//     //     error(err)
//     // })
//     try {
//       await store.dispatch("users/fetchUsers");
//       return {};
//     } catch (e) {
//       error(e);
//     }
//   },

    async fetch({ store, error }) {
        try {
            if (store.getters["users/users"].length === 0) {
                await store.dispatch("users/fetchUsers");
            }            
        } catch (e) {
            error(e)
        }
    },
  data() {
    return {
      pageTitle: "Users page",
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    goTo(user) {
      this.$router.push(`/users/` + user.id);
    },
  },
};
</script>
