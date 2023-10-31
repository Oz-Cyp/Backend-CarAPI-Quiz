const selectProxy = require("./queries/selectProxy");

const fetchProxy = async () => {
  const proxy = await selectProxy();

  return { proxy };
};

module.exports = fetchProxy;
