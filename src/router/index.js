import Home from '../views/home/home';
import About from '../views/about/about'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/article',
    name: 'Article',
    component: About
  },
  {
    path: '/post',
    name: 'Post',
    component: About
  },
  {
    path: '/demo',
    name: 'Demo',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default routes;