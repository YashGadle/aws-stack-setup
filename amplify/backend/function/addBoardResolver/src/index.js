const aws = require("aws-sdk");
const uuid = require("uuid/v4");
const docClient = new aws.DynamoDB.DocumentClient({
  apiVersion: "2012-10-08",
  region: process.env.REGION
});

async function writeColumns(params) {
  const promises = params.Items.map(
    (column, i) =>
      new Promise((resolve, reject) => {
        docClient.put(
          {
            TableName: params.TableName,
            Item: { ...column, id: uuid() }
          },
          err => {
            if (err) reject(err);
            else resolve(null);
          }
        );
      })
  );

  try {
    await Promise.all(promises);
  } catch (err) {
    throw err;
  }
}

async function writeBoard(params) {
  try {
    await new Promise((resolve, reject) => {
      docClient.put(params, (err, data) => {
        if (err) reject(err);

        resolve(null);
      });
    });
  } catch (err) {
    throw err;
  }
}

exports.handler = async (event, _, callback) => {
  console.log("event", event);

  const boardDetails = { ...event.arguments.input }; // {id, description,boardProjectId ,columns, title etc.....}

  const columns = [...boardDetails.columns]; // [{columnBoardId, title, etc.... }, {....}]

  const tableNameBoard = process.env.TABLE_NAME_BOARD;
  const tableNameColumn = process.env.TABLE_NAME_COLUMN;

  const columnParams = {
    TableName: tableNameColumn,
    Items: columns
  };

  const boardParams = {
    TableName: tableNameBoard,
    Item: {
      id: boardDetails.id,
      title: boardDetails.title,
      description: boardDetails.description,
      boardProjectId: boardDetails.boardProjectId
    }
  };

  console.log("board", boardParams);
  console.log("columns", columnParams);

  try {
    await writeColumns(columnParams);

    await writeBoard(boardParams);
  } catch (err) {
    return callback(err);
  }

  console.log("success", boardParams.Item);
  callback(null, boardParams.Item);
};
