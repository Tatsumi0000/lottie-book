<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <VApp>
    <TheHeader />
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<style scoped></style>
