import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import eventPage from '../views/eventPage'
import freeEventPage from '../views/freeEventPage'
import getTickets from '../views/getTickets'
import paymentUserPage from '../views/paymentUserPage'
import paymentPage from '../views/paymentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      meta: {
        layout: 'Private'
      }
    },
    {
      path: '/event/:eventId',
      name: 'eventPage',
      component: eventPage,
      meta: {
        layout: 'Private'
      }
    },
    {
      path: '/free-event',
      name: 'freeEventPage',
      component: freeEventPage,
      meta: {
        layout: 'Private'
      }
    },
    {
      path: '/get-tickets',
      name: 'getTickets',
      component: getTickets,
      meta: {
        layout: 'Private'
      }
    },
    {
      path: '/payment',
      name: 'paymentPage',
      component: paymentPage,
      meta: {
        layout: 'Public'
      }
    },
    {
      path: '/payment-user',
      name: 'paymentUserPage',
      component: paymentUserPage,
      meta: {
        layout: 'Public'
      }
    }
  ]
})
