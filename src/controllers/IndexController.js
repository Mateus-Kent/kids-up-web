const authProvider = require("../providers/authProvider");

module.exports = {
  index(req, res) {
    const { parent } = authProvider(req);

    return res.render(`index`, { parent: parent });
  },
};
