import Vue from 'vue'
import Router from 'vue-router'
// import Meta from 'vue-meta'
import Home from './views/Home'

Vue.use(Router)
// Vue.use(Meta)

const routes =  [
  {
    path: '/',
    name: 'home',
    meta: { 
      title: 'Cadastro | Test Front-end com Vue JS',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
      ]
    },
    component: Home,
  },
  {
    path: '/paises',
    name: 'paises',
    meta: { 
      title: 'Paises | Test Front-end com Vue JS',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
      ]
    },
    component: () => import('./views/Countries')      
  },
 

  {
    path: '*',
    name: 'erro404',
    meta: { 
      title: 'Página não encontrada | Test Front-end com Vue JS',
      metaTags: [
        {
          name: 'description',
          content: 'A página nãoe existe ou foi removida.'
        },
        {
          name: 'robots',
          content: 'noindex'
        }
      ]
    },
    component: () => import('./views/404.vue')   
  }
 

];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});

// ...


export default router

