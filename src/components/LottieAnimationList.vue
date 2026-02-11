<script setup lang="ts">
import LottieAnimationItem from "@/components/LottieAnimationItem.vue";
import { useLottieAssets } from "@/composables/useLottieAssets";
import { mdiAlertCircleOutline } from "@mdi/js";
import { useLocale } from "vuetify";

// Composableを呼び出し
const { currentAssets } = useLottieAssets();

const { t } = useLocale();
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
          :title="t('$vuetify.message.notfound.content')"
          :text="
            t('$vuetify.message.notfound.currentanimationcheckyourdirector')
          "
        >
        </VEmptyState>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped></style>
