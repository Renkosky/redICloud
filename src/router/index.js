import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import aboutus from '@/components/aboutus'
import alias from '@/components/alias'
import contact from '@/components/contact'
import example from '@/components/example'
import productions from '@/components/productions'
import solution from '@/components/solution'
import lis from '@/components/lis'
import ene from '@/components/ene'
import progres from '@/components/progres'
import mointor from '@/components/mointor'
import ioput from '@/components/ioput'





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
      path: '/alias',
      name: 'alias',
      component: alias
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
      children:[
        {
          path: '/productions/lis',
          name: 'lis',
          component: lis
        },
        {
          path: '/productions/ene',
          name: 'ene',
          component: ene
        },
        {
          path: '/productions/progres',
          name: 'progres',
          component: progres
        },
        {
          path: '/productions/ioput',
          name: 'ioput',
          component: ioput
        },
        {
          path: '/productions/mointor',
          name: 'mointor',
          component: mointor
        }


      ]
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
  ]
})
