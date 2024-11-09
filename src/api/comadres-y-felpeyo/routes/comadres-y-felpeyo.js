'use strict';

/**
 * comadres-y-felpeyo router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/comadres-y-felpeyos',
      handler: 'comadres-y-felpeyo.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/comadres-y-felpeyos/:id',
      handler: 'comadres-y-felpeyo.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/comadres-y-felpeyos',
      handler: 'comadres-y-felpeyo.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/comadres-y-felpeyos/:id',
      handler: 'comadres-y-felpeyo.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/comadres-y-felpeyos/:id',
      handler: 'comadres-y-felpeyo.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/comadres-y-felpeyos/year/:year',
      handler: 'comadres-y-felpeyo.findByYear',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
