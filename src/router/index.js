import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from 'components/pages/Index'
import ShowCard from 'components/pages/ShowCard'

import Borrow from 'components/pages/borrow/Borrow'
import BorrowComplete from 'components/pages/borrow/BorrowComplete'
import Borrowing from 'components/pages/borrow/Borrowing'
import BorrowNumber from 'components/pages/borrow/BorrowNumber'
import PlaceBorrowBook from 'components/pages/borrow/PlaceBorrowBook'

import Return from 'components/pages/return/Return'
import ReturnComplete from 'components/pages/return/ReturnComplete'
import Returning from 'components/pages/return/Returning'
import ReturnNumber from 'components/pages/return/ReturnNumber'
import PlaceReturnBook from 'components/pages/return/PlaceReturnBook'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ShowCard',
      name: 'ShowCard',
      component: ShowCard
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow,
      children: [
        {
          path: 'Complete',
          name: 'BorrowComplete',
          component: BorrowComplete
        },{
          path: 'Borrowing',
          name: 'Borrowing',
          component: Borrowing
        },{
          path: 'Number',
          name: 'BorrowNumber',
          component: BorrowNumber
        },{
          path: 'Place',
          name: 'PlaceBorrowBook',
          component: PlaceBorrowBook
        },
      ]
    },
    {
      path: '/return',
      name: 'Return',
      component: Return,
      children: [
        {
          path: 'Complete',
          name: 'ReturnComplete',
          component: ReturnComplete
        },{
          path: 'Returning',
          name: 'Returning',
          component: Returning
        },{
          path: 'Number',
          name: 'ReturnNumber',
          component: ReturnNumber
        },{
          path: 'Place',
          name: 'PlaceReturnBook',
          component: PlaceReturnBook
        },
      ]
    },
  ]
})
