// Create service client module using ES6 syntax.
const client = require("@aws-sdk/client-dynamodb");

const { DynamoDBClient, BatchWriteItemCommand } = client;
// Set the AWS Region.
const REGION = "us-east-2"; //e.g. "us-east-1"
const TABLE_NAME = "chaindata";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const updateDb = async () => {
  const chainData = await fetch(
    "https://raw.githubusercontent.com/connext/chaindata/main/crossChain.json"
  );
  const data = await chainData.json();
  const filteredData = data.filter((chain) => !!chain.domainId);
  console.log("filteredData: ", filteredData);
  const dbUpdateParams = filteredData.map((chain) => {
    return {
      PutRequest: {
        Item: {
          domainId: { S: chain.domainId },
          data: { S: JSON.stringify(chain) },
        },
      },
    };
  });
  console.log("dbUpdateParams: ", dbUpdateParams);
  await ddbClient.send(
    new BatchWriteItemCommand({
      RequestItems: {
        [TABLE_NAME]: dbUpdateParams,
      },
    })
  );
};

updateDb()
  .then(() => console.log("done"))
  .catch((e) => console.log(e));
