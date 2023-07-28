<script setup>
import "assets/main.css"
import { ref, watch } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const sidebarOpen = ref(false)

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
  ].includes(useRoute().path)

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

</script>
<template>
  <div dir="rtl" class="prose container mx-auto px-4 my-16" style="font-family: 'Noto Sans Arabic';">
    <div class="flex justify-between items-center mb-16">
      <div></div>
      <NuxtLink to="/" class="text-center text-sm text-gray-500 block text-black">
        ساقی
      </NuxtLink>
      <button type="button" @click.prevent="sidebarOpen = !sidebarOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <TransitionRoot as="template" :show="sidebarOpen" class="text-right font-[]">
          <Dialog as="div" class="relative z-50" @close="sidebarOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-gray-400 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
              <TransitionChild as="template" enter="transition ease-in-out duration-500 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-500 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-100 pt-5 pb-4">
                  <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="absolute top-0 right-0 -mr-12 pt-2">
                      <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                        <span class="sr-only">Close sidebar</span>
                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div class="h-0 flex-1 overflow-y-auto">
                    <div class="space-y-1 px-4">
                      <ContentNavigation 
                        style="font-family: 'Noto Sans Arabic';"
                        :query="queryContent({
                          where: {
                            _path: { $contains: $route.path }
                          }
                        })" 
                      />
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
              <div class="w-14 flex-shrink-0" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit close icon -->
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </button>
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
