import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Dashboard from '../components/Dashboard';
import NewBook from '../components/NewBook';
import AllBooks from '../components/AllBooks';
import NotFound from '../components/NotFound';

import guard from './guard';

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
      name: 'signup',
      component: SignUp,
      beforeEnter: guard.requireGuest,
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn,
      beforeEnter: guard.requireGuest,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: guard.requireUser,
    },
    {
      path: '/add',
      name: 'add',
      component: NewBook,
      beforeEnter: guard.requireUser,
    },
    {
      path: '/all',
      name: 'all',
      component: AllBooks,
      beforeEnter: guard.requireUser,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
  ],
});
