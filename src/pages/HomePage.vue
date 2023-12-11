<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="home-page">
    <div class="wrapper h-[400px] bg-blue-700">
      <div
        class="container mx-auto px-4 flex flex-col items-center justify-center h-full"
      >
        <h1 class="text-5xl text-white font-bold">Мини-тест</h1>
        <p class="text-white opacity-70">от Аминовой Насибы</p>
      </div>
    </div>
    <div class="start-button flex items-center justify-center">
      <button
        @click="router.push('/quiz')"
        class="text-white rounded-lg px-6 py-2 bg-blue-700 font-bold text-2xl mt-40"
      >
        Начать
      </button>
    </div>
  </div>
</template>
