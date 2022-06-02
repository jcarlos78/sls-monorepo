"use strict";

module.exports.criarConsumo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Consumo criado com sucesso!"
      }
    ),
  };
};

module.exports.listarConsumo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "lsta de consumo!"
      }
    ),
  };
};
