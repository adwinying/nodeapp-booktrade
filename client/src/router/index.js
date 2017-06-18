import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'singup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn,
    },
  ],
});
