const SwaggerService = require("moleculer-web-swagger");

module.exports = {
  mixins: [SwaggerService],
  settings: {
    middleware: false,
    port: 3001,
    ip: "0.0.0.0",
    expose: true,
    swagger: {
      info: {
        description: "moleculer apigateway swagger",
        version: "1.0.0",
        title: "moleculer-api-gateway",
        termsOfService: "",
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html"
        }
      },
      host: "127.0.0.1:3001",
      basePath: "/v1",
      tags: [{
        name: "pet",
        description: "Everything about your Pets",
        externalDocs: {
          description: "Find out more",
          url: "http://swagger.io"
        }
      }],
      schemes: [
        "http",
        "https"
      ],
      consumes: [
        "application/json",
        "application/xml"
      ],
      produces: [
        "application/xml",
        "application/json"
      ],
    },

    routes: [
      // your moleculer-web routes
      // you can impoert from your moleculer-web service
    ]
  }
};
