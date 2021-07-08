import { APIGatewayProxyEvent } from "aws-lambda";
import { findOne, find, create } from '../src/functions/movies/handler';
import lambdaTester from 'lambda-tester';

describe('FindOne [GET]',  () => {
  it('success', async () => {
    try {
      return lambdaTester(findOne)
      .event({ body: JSON.stringify({
        id: "19e9e850-dfb0-11eb-aebf-e3cc74ae0eb8",
      })})
      .expectResult((result: any) => {
        expect(result.statusCode).toEqual(200);
      });
    } catch (err) {
      console.log(err);
    }
  });
});

describe('create [POST]',  () => {
  it('success', async () => {
    try {
      return lambdaTester(create)
      .event({ 
        "body": "{\"name\": \"Wonder Woman 3\",\"year\": \"2017\",\"director\": \"Patty Jenkins\",\"gender\": \"Fantasía\",\"principal_actor\": \"Gal Gadot\"}"
      })
      .expectResult((result: any) => {
        expect(result.statusCode).toEqual(200);
      });
    } catch (err) {
      console.log(err);
    }
  });
});