const fetchProxy = require("~root/actions/Proxy/fetchProxy");
const handleAPIError = require("~root/utils/handleAPIError");

const getProxy = async (req, res) => {
  try {
    const { proxy } = await fetchProxy({});
    res.status(200).send({
      proxy
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getProxy;
