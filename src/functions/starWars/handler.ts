import 'source-map-support/register';
import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';
import { middyfy } from '@libs/lambda';
import ctrlstarWars from './controller'

const ctrl = ctrlstarWars();

const people: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<any> => ctrl.people(event);

export const main = middyfy(people);
