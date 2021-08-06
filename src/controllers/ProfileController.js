const userProvider = require("../providers/userProvider");

const fetch = require("node-fetch");

module.exports = {
  async editProfileView(req, res) {
    const parent = await userProvider(req);

    return res.render(`edit-profile`, { parent: parent });
  },

  async updateProfile(req, res) {
    const { token } = req.cookies;

    console.log(req.body);

    try {
      const response = await fetch("http://localhost:3000/parents", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req.body),
      });
      return res.redirect("/edit-profile");
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  },
};
