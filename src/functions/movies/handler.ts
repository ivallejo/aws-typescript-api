import 'source-map-support/register';
import { middyfy } from '../../libs/lambda';
import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';
import * as ctrl from './controller'



const findOneMovie: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<any> => ctrl.create(event);
const findMovie: APIGatewayProxyHandler = async (): Promise<any> => ctrl.find();
const createMovie: APIGatewayProxyHandler = (event: any) => ctrl.create(event);

export const findOne: any = middyfy(findOneMovie);
export const find: any = middyfy(findMovie);
export const create: any = middyfy(createMovie);


