<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
<div id="wrapper">
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</div>
</template>

<style lang="scss" scoped>
</style>
