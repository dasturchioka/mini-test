<script setup lang="ts">
import data from "@/data.json";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useResults } from "@/store/results";

const router = useRouter();
const resultsStore = useResults();

const currentOrder = ref(1);

const currentQuiz = computed(() => {
  return data.find((item) => item.id === currentOrder.value);
});

const selectedOption = ref("");

const nextQuestion = async (id: number, option: string) => {
  await resultsStore.pushResults({ id, option });
  console.log(resultsStore.results);

  selectedOption.value = "";

  if (currentOrder.value === 10) {
    await resultsStore.calculateResults();
    setTimeout(async () => {
      await router.push("/results");
    }, 400);
  } else {
    currentOrder.value++;
  }
};

const restart = async () => {
  resultsStore.results = [];
  selectedOption.value = "";
  await router.push("/");
};
</script>

<template>
  <div class="quiz-page">
    <div class="question-title text-white relative bg-blue-700 h-auto py-20">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl font-semibold">
          {{ currentOrder }}. {{ currentQuiz?.title }}
        </h3>
      </div>
    </div>
    <div
      class="question-options pt-10 container mx-auto px-4 flex flex-col space-y-4"
    >
      <div
        class="flex"
        v-for="(option, index) in currentQuiz?.options"
        :key="index"
      >
        <label
          :for="option"
          :class="
            selectedOption === option ? 'bg-blue-700 text-white' : 'bg-gray-100'
          "
          class="text-left cursor-pointer font-semibold p-4 rounded text-lg w-full"
        >
          {{ index }}) {{ option }}
        </label>
        <input
          type="radio"
          hidden
          :id="option"
          :value="option"
          v-model="selectedOption"
        />
      </div>
    </div>
    <footer
      class="mt-40 flex flex-row items-center justify-between container mx-auto px-4"
    >
      <button
        @click="restart"
        class="bg-blue-700 text-white text-lg rounded-lg px-4 py-2 font-semibold"
      >
        Домашняя страница
      </button>
      <p class="font-bold text-sm">Не обновляйте страницу во время игры</p>
      <button
        @click="nextQuestion(currentOrder, selectedOption)"
        :disabled="selectedOption ? false : true"
        class="bg-blue-700 text-white text-lg rounded-lg px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
      >
        Следующий
      </button>
    </footer>
  </div>
</template>
