const authProvider = require("../providers/authProvider");

module.exports = {
 async index(req, res) {
    const parent = await authProvider(req);

    return res.render(`index`, { parent: parent });
  },
};
