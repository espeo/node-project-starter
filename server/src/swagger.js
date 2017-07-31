import swaggerJsDoc from 'swagger-jsdoc';
import swaggerTools from 'swagger-tools';
import getConfig from './config/config';

const swaggerSpec = swaggerJsDoc(getConfig('swagger'));

export default (app) => {
  app.get('/swagger.json', (req, res) => {
    res.send(swaggerSpec);
  });

  swaggerTools.initializeMiddleware(swaggerSpec, (middleware) => {
    app.use(middleware.swaggerUi());
  });
};
