<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { VSwitch } from "vuetify/components";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
const theme = useTheme();
const isDarkTheme = ref(theme.global.current.value.dark);
const changeTheme = () => {
  theme.global.name.value = isDarkTheme.value ? "dark" : "light";
};
</script>

<template>
  <VSwitch
    v-model="isDarkTheme"
    @update:model-value="changeTheme"
    :prepend-icon="isDarkTheme ? mdiWeatherNight : mdiWeatherSunny"
    hide-details
    inset
    class="mr-auto"
  />
</template>

<style scoped></style>
