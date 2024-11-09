'use strict';

/**
 * comadres-y-felpeyo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comadres-y-felpeyo.comadres-y-felpeyo', ({ strapi }) => ({
  // Extender el controlador base
  async find(ctx) {
    // Llamar al controlador por defecto
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  // Añadir método personalizado para buscar por año
  async findByYear(ctx) {
    const { year } = ctx.params;

    const entity = await strapi.db.query('api::comadres-y-felpeyo.comadres-y-felpeyo').findOne({
      where: { year: parseInt(year) },
      populate: {
        Premios: {
          populate: {
            candidatos: {
              populate: ['Articulos', 'Medios', 'Videos']
            }
          }
        },
        Felpeyu: true,
        Babayu: true,
        cancion: true,
        noticias: true,
        Imagenes: true
      }
    });

    if (!entity) {
      return ctx.notFound('No se encontró registro para ese año');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return {
      data: sanitizedEntity
    };
  }
}));
