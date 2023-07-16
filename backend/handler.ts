"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        massage: "Go serverless v3.3! You function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};