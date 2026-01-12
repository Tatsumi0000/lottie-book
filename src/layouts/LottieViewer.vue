<script setup lang="ts">
import LottieAnimationItem from "@/components/LottieAnimationItem.vue";
import { router } from "@/plugins/router";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { mdiClose } from "@mdi/js";
const route = useRoute();
const animationData = ref<object | null>(null);
const isLoading = ref(false);

// 1. assets/lottie 内のすべてのJSONファイルを動的インポートの対象にする
const lottieFiles = import.meta.glob("@/assets/*.json");

const loadLottieFile = async (fileName: string) => {
  if (!fileName) return;

  isLoading.value = true;

  // 期待されるパスを組み立てる
  const fullPath = `/src/assets/${fileName}.json`;
  const loader = lottieFiles[fullPath];

  if (loader) {
    try {
      // 実際にファイルをインポート
      const module = (await loader()) as any;
      // module.default に JSON の中身が入っている
      animationData.value = module.default;
    } catch (e) {
      console.error("ファイルの読み込みに失敗しました", e);
      animationData.value = null;
    }
  } else {
    console.warn("対象のファイルが見つかりません:", fullPath);
    animationData.value = null;
  }

  isLoading.value = false;
};

// URLのパラメータ (title) が変わるたびに読み込み直す
watch(
  () => route.params.title,
  (newTitle) => {
    loadLottieFile(newTitle as string);
  },
  { immediate: true },
);
// URLに title があればダイアログを開く
const isOpen = computed({
  get: () => !!route.params.title,
  set: (val) => {
    if (!val) router.push("/"); // 閉じたらTopに戻る
  },
});
</script>

<template>
  <VDialog v-model="isOpen" max-width="800">
    <VCard rounded="xl" class="pa-4">
      <div v-if="isLoading" class="text-center pa-10">
        <VProgressCircular indeterminate color="primary" />
      </div>

      <div v-else-if="animationData">
        <VCardTitle class="d-flex justify-space-between align-center">
          {{ route.params.title }}
          <VBtn :icon="mdiClose" variant="text" @click="isOpen = false" />
        </VCardTitle>
        <LottieAnimationItem
          :title="String(route.params.title)"
          :animationData="animationData"
        />
      </div>

      <VAlert v-else type="error">ファイルが見つかりません</VAlert>
    </VCard>
  </VDialog>
</template>
