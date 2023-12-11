<script setup lang="ts">
import router from "@/router";
import { useResults } from "@/store/results";

const resultsStore = useResults();

const restart = async () => {
  resultsStore.results = [];
  await router.push("/");
};
</script>

<template>
  <div class="results-page">
    <div class="results-title text-white relative bg-blue-700 h-auto py-20">
      <div class="container mx-auto px-4">
        <h3 class="text-4xl font-semibold">
          Ваш результат: {{ resultsStore.correctAnswers }}
        </h3>
      </div>
    </div>
    <div class="results-list pt-5">
      <div class="container mx-auto px-4">
        <h4 class="title text-2xl mb-4">Правильные ответы</h4>
        <ul class="text-xl font-semibold">
          <li class="p-4 bg-gray-50 border-b border-t">1. B</li>
          <li class="p-4 bg-gray-50 border-b">2. A</li>
          <li class="p-4 bg-gray-50 border-b">3. A</li>
          <li class="p-4 bg-gray-50 border-b">4. G</li>
          <li class="p-4 bg-gray-50 border-b">5. A</li>
          <li class="p-4 bg-gray-50 border-b">6. A</li>
          <li class="p-4 bg-gray-50 border-b">7. A</li>
          <li class="p-4 bg-gray-50 border-b">8. B</li>
          <li class="p-4 bg-gray-50 border-b">9. B</li>
          <li class="p-4 bg-gray-50 border-b">10. V</li>
        </ul>
        <button
          @click="restart"
          class="bg-blue-700 mt-6 text-white text-lg rounded-lg px-4 py-2 font-semibold"
        >
          Домашняя страница
        </button>
      </div>
    </div>
  </div>
</template>
