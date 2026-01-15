<script setup lang="ts">
import LottieAnimationItem from "@/components/LottieAnimationItem.vue";
import { router } from "@/plugins/router";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { mdiAlertCircle, mdiClose } from "@mdi/js";
const route = useRoute();
const animationData = ref<object | null>(null);
const isLoading = ref(false);

// 1. assets/ 内のすべてのJSONファイルを動的インポートの対象にする
const lottieFiles = import.meta.glob("/src/assets/**/*.json");

const onAlertClosed = () => {
  router.push("/");
};
const loadLottieFile = async (theme: string, title: string) => {
  if (!theme || !title) {
    animationData.value = null;
    return;
  }

  isLoading.value = true;

  // 期待されるパスを組み立てる
  const fullPath = `/src/assets/${theme}/${title}`;
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
  () => [route.params.theme, route.params.title],
  ([newTheme, newTitle]) => {
    if (typeof newTheme === "string" && typeof newTitle === "string") {
      loadLottieFile(newTheme, newTitle);
    } else {
      animationData.value = null;
    }
  },
  { immediate: true }, // ページを開いた瞬間にも実行
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

      <VAlert
        v-else
        type="error"
        closable
        variant="tonal"
        :icon="mdiAlertCircle"
        @click:close="onAlertClosed()"
        >ファイルが見つかりません</VAlert
      >
    </VCard>
  </VDialog>
</template>
