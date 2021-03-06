# TATA CONSULTANCY SERVICES

## Nombres: Luis Fernando Vallejo Aguilar 
## Project: Serverless  馃殌
## Tecnologias: AWS Node.js Typescript DynamoDB 

> **Reto T茅cnico** 

Puntos de evaluaci贸n:

* [x] M铆nimo 2 endpoints, GET para recuperar la informaci贸n y POST para crear un elemento.
* [x] Integraci贸n con una base de datos (DynamoDB o MySQL)
* [x] Integraci贸n con SWAPI
* [x] Uso de Serverless Framework
* [x] Uso de Node.js
* [x] Respeto de las buenas pr谩cticas de desarrollo
* [x] Traducci贸n de campos de ingles a espa帽ol

Puntos Bonus

* [x] Documentaci贸n de uso (2 puntos)
* [x] Pruebas unitarias (10 puntos)
* [ ] Documentaci贸n en Open API/Swagger (2 puntos)
* [x] Desplegar sin errores en AWS con el comando deploy del framework serverless (2 puntos)
* [x] Mayor complejidad de Integraci贸n (3 puntos)

## Installation/deployment instructions

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npm run deploy` to deploy this stack to AWS

## Test service

This project contains a lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/movies` route with `POST` method. The request body must be provided as `application/json`. The body structure is tested by API Gateway against `src/functions/movies/schema.ts` JSON-Schema definition: it must contain the `name` property.

- requesting any other path than `/movies` with any other method than `POST` will result in API Gateway returning a `403` HTTP error code
- sending a `POST` request to `/movies` with a payload **not** containing a string property named `name` will result in API Gateway returning a `400` HTTP error code
- sending a `POST` request to `/movies` with a payload containing a string property named `name` will result in API Gateway returning a `200` HTTP 

### Locally

In order to test the movies function locally, run the following command:

- `npm run movie:post` if you're using NPM
- `npm run movie:get` if you're using NPM

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/movies' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Wonder Woman"
}'
```

##  Features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
鈹溾攢鈹? src
鈹?   鈹溾攢鈹? functions               # Lambda configuration and source code folder
鈹?   鈹?   鈹溾攢鈹? movies
鈹?   鈹?   鈹?   鈹溾攢鈹? controller.ts   # `Movies` lambda source code
鈹?   鈹?   鈹?   鈹溾攢鈹? handler.ts      # `Movies` lambda source code
鈹?   鈹?   鈹?   鈹溾攢鈹? index.ts        # `Movies` lambda Serverless configuration
鈹?   鈹?   鈹?   鈹溾攢鈹? mock.json       # `Movies` lambda input parameter, if any, for local invocation
鈹?   鈹?   鈹?   鈹斺攢鈹? store.ts        # `Movies` lambda store AWS DynamoDB
鈹?   鈹?   鈹?
鈹?   鈹?   鈹溾攢鈹? startWars
鈹?   鈹?   鈹?   鈹溾攢鈹? controller.ts   # `StartWars` lambda source code
鈹?   鈹?   鈹?   鈹溾攢鈹? handler.ts      # `StartWars` lambda source code
鈹?   鈹?   鈹?   鈹溾攢鈹? index.ts        # `StartWars` lambda Serverless configuration
鈹?   鈹?   鈹?   鈹溾攢鈹? interface.ts    # `StartWars` lambda interfaces API
鈹?   鈹?   鈹?   鈹斺攢鈹? schema.ts       # `StartWars` lambda input event JSON-Schema
鈹?   鈹?   鈹?
鈹?   鈹?   鈹斺攢鈹? index.ts            # Import/export of all lambda configurations
鈹?   鈹?
鈹?   鈹斺攢鈹? libs                    # Lambda shared code
鈹?       鈹斺攢鈹? apiGateway.ts       # API Gateway specific helpers
鈹?       鈹斺攢鈹? handlerResolver.ts  # Sharable library for resolving lambda handlers
鈹?       鈹斺攢鈹? lambda.ts           # Lambda middleware
鈹?
鈹溾攢鈹? tests
鈹?   鈹溾攢鈹? movies.mock.ts           # `Movies` Mock
鈹?   鈹斺攢鈹? movies.test.ts           # `Movies` Unit Test
鈹?
鈹溾攢鈹? babel.config.js             # Babel configuration
鈹溾攢鈹? jest.config.test.json       # Jest configuration
鈹溾攢鈹? jest.setup.js               # Jest setup
鈹溾攢鈹? package.json
鈹溾攢鈹? serverless.ts               # Serverless service file
鈹溾攢鈹? tsconfig.json               # Typescript compiler configuration
鈹溾攢鈹? tsconfig.paths.json         # Typescript paths
鈹斺攢鈹? webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`

---

# Gracias!