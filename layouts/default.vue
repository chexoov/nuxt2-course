<template>
  <div>
    <NavBar />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  comments: {
    NavBar,
  },
};
</script>
