import { DynamoDB } from 'aws-sdk'
const dynamoDb = new DynamoDB.DocumentClient({region: 'us-east-1'})

export default {
    /**
     * Find movie list
     */
    find: async function (params: any) {
        try {
            return scanDynamoRecords(params, []);
        } catch (err) { throw err; }
    },
    /**
   * Query movie by id
   * @param event
   */
    findOne: async function (params: any) {
        try {
            const result = await dynamoDb.get(params).promise().then(( response ) => {
                return response.Item;
            }, (error) => {
                return { error }; 
            });
            return result;
        } catch (err) { throw err; }
    },
    /**
    * Create movie
    * @param params
    */
     create: async function (params: any): Promise<object> {
        try {
            const result = await dynamoDb.put(params).promise().then(() => {
                return { Operation: 'Save', Message: 'Success', Item: params }
            }, ( err ) => {
                return { err }; 
            })
            return result;
        } catch (err) { throw err; }
    }
}

const scanDynamoRecords = async (scanParams: any, itemArray: any): Promise<object> => {
    try {
        const dynamoData = await dynamoDb.scan(scanParams).promise();
        itemArray = itemArray.concat(dynamoData.Items);
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, itemArray);
        }
        return itemArray;
    } catch(err) { throw err; }
}