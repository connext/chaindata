// Create service client module using ES6 syntax.
const client = require("@aws-sdk/client-s3");

const { S3Client, PutObjectCommand } = client;
// Set the AWS Region.
const REGION = "us-east-2";

const s3Client = new S3Client({
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
  const bucketParams = {
    Bucket: "connext-chaindata",
    // Specify the name of the new object. For example, 'index.html'.
    // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
    Key: "chaindata.json",
    // Content of the new object.
    Body: JSON.stringify(filteredData),
  };
  console.log("bucketParams: ", bucketParams);
  await s3Client.send(new PutObjectCommand(bucketParams));
  console.log(
    "Successfully uploaded object: " +
      bucketParams.Bucket +
      "/" +
      bucketParams.Key
  );
};

updateDb()
  .then(() => console.log("done"))
  .catch((e) => console.log(e));
