import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Todo2 from '@/components/Todo2'

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
      component: Todo
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
