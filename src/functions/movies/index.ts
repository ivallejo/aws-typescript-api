import { handlerPath } from '@libs/handlerResolver';

const movieFindOne = {
  handler: `${handlerPath(__dirname)}/handler.findOne`,
  events: [
    {
      http: {
        method: 'get',
        path: 'movies/{id}',
        cors: true
      }
    }
  ]
}
const movieFind = {
  handler: `${handlerPath(__dirname)}/handler.find`,
  events: [
    {
      http: {
        method: 'get',
        path: 'movies/',
        cors: true
      }
    }
  ]
}
const movieCreate = {
  handler: `${handlerPath(__dirname)}/handler.create`,
  events: [
    {
      http: {
        method: 'post',
        path: 'movies/',
        cors: true
      }
    }
  ]
}

export { movieFindOne, movieFind, movieCreate }

