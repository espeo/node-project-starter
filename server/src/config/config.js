const env = process.env.ENV;

const testEnv = require('./config.test');
const devEnv = require('./config.dev');
const prodEnv = require('./config.prod');

let envVars;

if (env === 'test') {
  envVars = testEnv;
} else if (env === 'dev') {
  envVars = devEnv;
} else {
  envVars = prodEnv;
}

const config = {
  swagger: {
    swaggerDefinition: {
      info: {
        title: 'Project name',
        version: '1.0.0',
        description: 'project description',
      },
      host: `localhost:${envVars.port}`,
      basePath: '/',
    },
    apis: ['./src/routes/*'],
  },
  port: envVars.port,
  connectionString: envVars.connectionString,
};

export default parameter => (config[parameter] ? config[parameter] : null);
