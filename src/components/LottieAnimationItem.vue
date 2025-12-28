<script setup lang="ts">
import { ref, watch } from "vue";
import { Vue3Lottie } from "vue3-lottie";

interface BaseProps {
  /** ファイル名 */
  title: string;
}

/** animationData を使う場合の型 */
interface DataProps extends BaseProps {
  /** LottieアニメーションのJSONデータ */
  animationData: object;
  path?: never; // pathは入力させない
}

/** path を使う場合の型 */
interface PathProps extends BaseProps {
  animationData?: never; // animationDataは入力させない
  /** LottieアニメーションのJSONファイルのパス */
  path: string;
}

type Props = DataProps | PathProps;

const props = defineProps<Props>();
/** ループするか */
const loop = ref(false);
/** 自動再生するか */
const autoPlay = ref(false);

/** lottieをマウントしている要素 */
const lottieContainer = ref<InstanceType<typeof Vue3Lottie> | null>(null);

/** 先頭から再生開始 */
const restartAnimation = () => {
  lottieContainer.value?.stop();
  lottieContainer.value?.play();
};

/** 再生開始 */
const handlePlay = () => {
  loop.value = false;
  autoPlay.value = true;

  restartAnimation();
};

watch(loop, (newLoop) => {
  if (newLoop) {
    autoPlay.value = true;
    restartAnimation();
  }
});
</script>

<template>
  <VCard>
    <Vue3Lottie
      ref="lottieContainer"
      :animationData="props.animationData"
      :assetsPath="props.path"
      :autoPlay="autoPlay"
      :loop="loop"
    />
    <VCardTitle> {{ props.title }}</VCardTitle>
    <VBtn @click="handlePlay()"> 再生 </VBtn>
    <VSwitch
      :label="`ループ再生: ${loop ? 'ON' : 'OFF'}`"
      color="primary"
      v-model="loop"
    />
  </VCard>
</template>

<style scoped></style>
