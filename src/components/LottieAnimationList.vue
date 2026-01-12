<script setup lang="ts">
import LottieAnimationItem from "@/components/LottieAnimationItem.vue";
import { useLottieAssets } from "@/composables/useLottieAssets";
import { mdiAlertCircleOutline } from "@mdi/js";
// Composableを呼び出し
const { currentAssets } = useLottieAssets();
</script>

<template>
  <VContainer>
    <VRow v-if="currentAssets.length > 0">
      <VCol cols="6" lg="3" v-for="asset in currentAssets" :key="asset.url">
        <LottieAnimationItem
          :title="`${asset.fileName}`"
          :animationData="asset.content"
        />
      </VCol>
    </VRow>

    <VRow v-else justify="center">
      <VCol cols="12" md="8">
        <VEmptyState
          :icon="mdiAlertCircleOutline"
          title="コンテンツが見つかりません"
          text="現在のテーマに対応するアニメーションアセットが見つかりませんでした。ディレクトリの設定を確認してください。"
        >
        </VEmptyState>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped></style>
