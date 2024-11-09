'use strict';

module.exports = {
  async find(ctx) {
    const entities = await strapi.services['api::home.home'].find(ctx.query);
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services['api::home.home'].findOne({ id });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.services['api::home.home'].create(ctx.request.body);
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services['api::home.home'].update({ id }, ctx.request.body);
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services['api::home.home'].delete({ id });
    return entity;
  }
};
