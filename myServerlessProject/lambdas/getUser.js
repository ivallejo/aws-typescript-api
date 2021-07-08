const Responses = require('./API_Responses');

exports.handler = async event => {
    console.log('event', event)
    if ( !event.pathParameters || !event.pathParameters.ID ) {
        return Responses._400({ message: 'missing the ID from the path www' });
    }
    let ID = event.pathParameters.ID
    if (data[ID]) {
        return Responses._200(data[ID]);
    }
    return Responses._400({ message: 'no ID in data www' });
}

const data = {
    1234 : { name: 'Fernando Vallejo', age: 25, job: 'Profesor'},
    1235 : { name: 'Fernando Vallejo', age: 25, job: 'Profesor'},
    1236 : { name: 'Fernando Vallejo', age: 25, job: 'Profesor'}
}