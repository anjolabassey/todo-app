import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Todo2 from '@/components/Todo2'
import About from '@/components/About'
import About2 from '@/components/About2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo2',
      name: 'Todo2',
      component: Todo2    
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [ 
        {
          path: '/about/:name',
          name: 'About2',
          component: About2
        }
      ]
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
