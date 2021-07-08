import { formatJSONResponse, formatJSONResponseError } from '../../libs/apiGateway';
import service from "./store";
import * as uuid from 'uuid';

const dynamodbTableName = 'movies';

async function findOne (event: any) {
    try {
        const id = event.pathParameters.id;
        const params = { TableName: dynamodbTableName, Key: { id } }
        const movie = await service.findOne(params);
        return formatJSONResponse( { movie } );
    } catch ( err ) {
        return formatJSONResponseError({ error: err }); 
    }
}

async function find () {
    try {
        const params = { TableName: dynamodbTableName };
        const allMovies = await service.find(params);
        const body = { movies: allMovies };
        return formatJSONResponse( body );
    } catch ( err ) {
        return formatJSONResponseError({ error: err }); 
    }
}

async function create (event: any) {
    try {
        const timestamp = new Date().getTime()
        const requestBody = (event.body);
        const params = { TableName: dynamodbTableName, Item: { id: uuid.v1(), ...requestBody, createdAt: timestamp, updatedAt: timestamp} }
        const response: any = await service.create(params);
        return formatJSONResponse( response );
    } catch ( error ) {
        return formatJSONResponseError({ error }); 
    }
}

export {
    create,
    find,
    findOne
};
