const userProvider = require("../providers/userProvider");

module.exports = {
  async index(req, res) {
    const parent = await userProvider(req);
    return res.render(`index`, { parent: parent });
  },
};
