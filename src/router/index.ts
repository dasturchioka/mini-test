import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home-page",
      path: "/",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      name: "quiz-page",
      path: "/quiz",
      component: () => import("@/pages/QuizPage.vue"),
    },
    {
      name: "results-page",
      path: "/results",
      component: () => import("@/pages/ResultsPage.vue")
    }
  ],
});

export default router