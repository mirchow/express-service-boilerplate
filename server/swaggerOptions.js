const packageJson = require('../package.json')

module.exports = {
  swaggerDefinition: {
    info: {
      title: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
      license: {
        name: packageJson.license
      },
      contact: {
        name: packageJson.author.name,
        email: packageJson.author.email
      }
    },
    host: process.env.HOST ? process.env.HOST : 'api.bcbsfl.com',
    basePath: 'api/v1',
    tags: [
      {
        name: 'contact',
        description: 'Contact methods'
      }
    ],
    securityDefinitions: {
      jwtoken: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization'
      }
    }
  },
  apis: ['./handlers/*.js']
}
