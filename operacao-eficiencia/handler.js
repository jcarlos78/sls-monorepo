"use strict";

module.exports.relatorio = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Relatório de eficiência!"
      },
    ),
  };
};
