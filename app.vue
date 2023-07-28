<script setup>
import "assets/main.css"
import { ref, watch } from 'vue'
import { vOnKeyStroke } from '@vueuse/components'

useHead({
  titleTemplate: (title) => title ? `ساقی — ${title}` : `ساقی`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  script: [
    { src: "https://www.googletagmanager.com/gtag/js?id=G-WGC1GVR7F8", async: true },
    { children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WGC1GVR7F8');" }
  ]
});

const ignoreSurround = () => [
    '/',
    '/hafez',
  ].includes(useRoute()?.path || '')

let prev = ref({})
let next = ref({})
const getSurround = (path) => queryContent()
      .only(['_path', 'title'])
      .findSurround(path)
      .then(
        ([newNext, newPrev]) => { next.value = newNext; prev.value = newPrev }
      )
watch(
  () => useRoute().path,
  async (to, from) => getSurround(to)
)
getSurround(useRoute().path)

onKeyStroke('J', (e) => {
  e.preventDefault()
  useRouter().push(prev.value._path)
})

onKeyStroke('K', (e) => {
  e.preventDefault()
  useRouter().push(next.value._path)
})

</script>
<template>
  <div dir="rtl" class="prose container mx-auto px-4 my-16" style="font-family: 'Noto Sans Arabic';">
    <div class="flex justify-center items-center mb-16">
      <NuxtLink to="/" class="text-center text-sm text-gray-500 block text-black">
        ساقی
      </NuxtLink>
    </div>
    <NuxtPage />
    <div v-if="!ignoreSurround()" class="flex justify-center gap-x-8 mt-16">
      <NuxtLink class="w-1/2 text-left" :to="prev._path">{{ prev.title }}</NuxtLink>
      <NuxtLink class="w-1/2" :to="next._path">{{ next.title }}</NuxtLink>
    </div>
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
:deep(li) {
  @apply mb-4;
}
</style>
