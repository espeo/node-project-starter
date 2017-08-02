const env = process.env.ENV

const envVars = require(`./config.${env}`)

const config = {
  swagger: {
    swaggerDefinition: {
      info: {
        title: 'Project name',
        version: '1.0.0',
        description: 'project description'
      },
      host: `localhost:${envVars.port}`,
      basePath: '/'
    },
    apis: ['./src/routes/*']
  },
  port: envVars.port,
  connectionString: envVars.connectionString
}

export default parameter => config[parameter] ? config[parameter] : null
