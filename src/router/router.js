import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/main-page/mainPage.vue';
import FiveDaysPage from '../components/for-five-days/forecastFiveDays.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage,
    },
    {
      path: '/detail-forecast',
      name: 'Details',
      component: FiveDaysPage,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
});

export default router;
