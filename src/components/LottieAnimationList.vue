<script setup lang="ts">
import LottieAnimationItem from "./LottieAnimationItem.vue";
import SampleAnimation from "./../assets/sampleLottie.json";
</script>

<template>
  <VRow>
    <VCol cols="12" md="4" v-for="n in 10">
      <LottieAnimationItem
        :fileName="`${n.toString()} - 番目`"
        :animationData="SampleAnimation"
      />
    </VCol>
  </VRow>
</template>

<style scoped></style>
