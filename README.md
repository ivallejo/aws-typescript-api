# TATA CONSULTANCY SERVICES

## Nombres: Luis Fernando Vallejo Aguilar 
## Project: Serverless  🚀
## Tecnologias: AWS Node.js Typescript DynamoDB 

> **Reto Técnico** 

Puntos de evaluación:

* [x] Mínimo 2 endpoints, GET para recuperar la información y POST para crear un elemento.
* [x] Integración con una base de datos (DynamoDB o MySQL)
* [x] Integración con SWAPI
* [x] Uso de Serverless Framework
* [x] Uso de Node.js
* [x] Respeto de las buenas prácticas de desarrollo
* [x] Traducción de campos de ingles a español

Puntos Bonus

* [x] Documentación de uso (2 puntos)
* [x] Pruebas unitarias (10 puntos)
* [ ] Documentación en Open API/Swagger (2 puntos)
* [x] Desplegar sin errores en AWS con el comando deploy del framework serverless (2 puntos)
* [x] Mayor complejidad de Integración (3 puntos)

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
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── movies
│   │   │   ├── controller.ts   # `Movies` lambda source code
│   │   │   ├── handler.ts      # `Movies` lambda source code
│   │   │   ├── index.ts        # `Movies` lambda Serverless configuration
│   │   │   ├── mock.json       # `Movies` lambda input parameter, if any, for local invocation
│   │   │   └── store.ts        # `Movies` lambda store AWS DynamoDB
│   │   │
│   │   ├── startWars
│   │   │   ├── controller.ts   # `StartWars` lambda source code
│   │   │   ├── handler.ts      # `StartWars` lambda source code
│   │   │   ├── index.ts        # `StartWars` lambda Serverless configuration
│   │   │   ├── interface.ts    # `StartWars` lambda interfaces API
│   │   │   └── schema.ts       # `StartWars` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── tests
│   ├── movies.mock.ts           # `Movies` Mock
│   └── movies.test.ts           # `Movies` Unit Test
│
├── babel.config.js             # Babel configuration
├── jest.config.test.json       # Jest configuration
├── jest.setup.js               # Jest setup
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`

---

# Gracias!