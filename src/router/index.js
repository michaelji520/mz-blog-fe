import Home from '../views/home/home';
import About from '../views/about/about'
import Write from '../views/write/write'

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
    path: '/write',
    name: 'Write',
    component: Write
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