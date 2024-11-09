'use strict';

/**
 * cd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cd.cd');
