const aws = require("aws-sdk");
const ddb = new aws.DynamoDB({ apiVersion: "2012-10-08" });

exports.handler = async (event, context, callback) => {
  console.log(event);

  let date = new Date();

  const tableName = process.env.TABLE_NAME;
  const region = process.env.REGION;
  const defaultAvi =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdDnuZFspZAXcbx_EibCLHFK8GRCMN2HMkqlH06lUEXOM0Jrsk";

  console.log("table=" + tableName + " -- region=" + region);

  aws.config.update({ region: region });

  if (event.request.userAttributes.sub) {
    let ddbParams = {
      Item: {
        __typename: { S: "User" },
        id: { S: event.request.userAttributes.sub },
        picture: { S: event.request.userAttributes.picture || defaultAvi },
        username: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() }
      },
      TableName: tableName
    };

    // Call DynamoDB
    try {
      await ddb.putItem(ddbParams).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");

    callback(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Error: Nothing was written to DDB or SQS");
    callback(null, event);
  }

  callback(null, event);
};
