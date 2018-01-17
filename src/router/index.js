import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import aboutus from '@/components/aboutus'
import allies from '@/components/allies'
import contact from '@/components/contact'
import example from '@/components/example'
import productions from '@/components/productions'
import solution from '@/components/solution'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/allies',
      name: 'allies',
      component: allies
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/productions',
      name: 'productions',
      component: productions,
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
  ]
})
