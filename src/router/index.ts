import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealList from '../views/MealList.vue'
import MealDetails from '../views/MealDetailsPage.vue'
import ResultPage from '../views/ResultPage.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    { path: '/category/:catName', component: MealList, name: 'Category' },
    { path: '/area/:areaName', component: MealList, name: 'Area' },
    { path: '/meal', component: ResultPage, name: 'ResultMeal' },
    { path: '/ingredient', component: ResultPage, name: 'filterIngredient' },
    { path: '/recipe/:id', component: MealDetails, props: true, name: 'MealDetails' },
    { path: '/:notFound(.*)', component: NotFound, name: 'NotFound' }
  ]
})

export default router
