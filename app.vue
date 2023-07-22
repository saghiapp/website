<script setup>
import "assets/main.css"

useHead({
  titleTemplate: (title) => title ? `ساقی — ${title}` : `ساقی`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  script: [
    { src: "https://www.googletagmanager.com/gtag/js?id=G-WGC1GVR7F8", async: true },
    { children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WGC1GVR7F8');" }
  ]
});
</script>
<template>
  <div dir="rtl" class="prose container mx-auto px-4 my-16" style="font-family: 'Noto Sans Arabic';">
    <a href="/" class="text-center text-sm text-gray-500 block text-black mb-16">
      ساقی
    </a>
    <NuxtPage />
    <footer class="mt-32 text-gray-400 text-center">
      ۱۴۰۲
    </footer>
  </div>
</template>
<style scoped>
:deep(a) {
  @apply no-underline text-indigo-600;
}
:deep(h1) {
  @apply mb-16 text-gray-300 text-center text-8xl leading-40;
}
:deep(p) {
  @apply my-2 leading-10;
}
:deep(.b) {
  @apply flex justify-around items-center gap-x-8;
}
:deep(.m1) {
  @apply w-full text-left;
}
:deep(.m2) {
  @apply w-full text-right;
}
</style>
