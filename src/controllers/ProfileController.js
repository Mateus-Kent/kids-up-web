const authProvider = require("../providers/authProvider");

module.exports = {
  editProfileView(req, res) {
    const { parent } = authProvider(req);
    return res.render(`edit-profile`, { parent: parent });
  },
};
