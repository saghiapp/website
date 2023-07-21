<script>
import "assets/main.css"
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
  @apply mb-16 text-gray-300 text-center text-8xl;
}
:deep(p) {
  @apply my-2 leading-10;
}
</style>
