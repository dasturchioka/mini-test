import { defineStore } from "pinia";
import { ref } from "vue";
import data from "@/data.json";

type Option =
  | {
      id: number;
      title: string;
      options: { A: string; B: string; V: string; G: string };
      correctOne: string;
    }
  | {
      id: number;
      title: string;
      options: { A: string; B: string; V: string; G?: undefined };
      correctOne: string;
    };
export const useResults = defineStore("results-store", () => {
  const results = ref<{ id: number; option: string }[]>([]);
  let correctAnswers = ref(0);

  async function calculateResults() {
    data.forEach((item: Option) => {
      if (item.correctOne === results.value[item.id - 1].option) {
        correctAnswers.value++;
      }
    });
  }

  async function pushResults(payload: { id: number; option: string }) {
    results.value.push(payload);
  }

  return { calculateResults, pushResults, correctAnswers, results };
});
