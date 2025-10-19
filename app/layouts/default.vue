<script setup lang="ts"></script>

<template>
  <section class="page">
    <TopBar />
    <main>
      <slot class="" />
    </main>
    <AppFooter />
  </section>
</template>

<style lang="scss" scoped>
.page {
  @apply flex flex-col min-h-screen;
  main {
    @apply flex-grow;
  }
}
</style>
