import type { Core } from '@strapi/strapi';
import middlewares from './middlewares';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  const config = strapi.plugin('webp-converter');
  strapi.server.use(middlewares.convertToWebp(config, { strapi }));
};

export default bootstrap;
