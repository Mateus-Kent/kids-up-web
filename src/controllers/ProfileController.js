const authProvider = require("../providers/authProvider");

module.exports = {
  async editProfileView(req, res) {
    const parent = await authProvider(req);
    return res.render(`edit-profile`, { parent: parent });
  },
};
