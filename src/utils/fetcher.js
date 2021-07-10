const fetch = require("node-fetch");

const url = "http://localhost:3000";

module.exports = async (endPoint, options = {}) => {
  return await fetch(`${url}${endPoint}`, options);
};