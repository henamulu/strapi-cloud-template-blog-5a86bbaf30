'use strict';

module.exports = {
  async find(params) {
    return strapi.entityService.findMany('api::home.home', params);
  },

  async findOne(params) {
    const { id } = params;
    return strapi.entityService.findOne('api::home.home', id, params);
  },

  async create(data) {
    return strapi.entityService.create('api::home.home', {
      data,
    });
  },

  async update(params, data) {
    const { id } = params;
    return strapi.entityService.update('api::home.home', id, {
      data,
    });
  },

  async delete(params) {
    const { id } = params;
    return strapi.entityService.delete('api::home.home', id);
  },
};
