import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Page1 from './views/Page1.vue';
import Page2 from './views/Page2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
    },
    {
      path: '/Page2',
      name: 'Page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page2.vue'),
    },
  ],
});
