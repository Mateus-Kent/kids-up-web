const fetcher = require("../utils/fetcher");

module.exports = {
  registerView(req, res) {
    return res.render(`signup`);
  },
  loginView(req, res) {
    return res.render(`login`);
  },
  async register(req, res) {
    const { email, phone, password, username } = req.body;

    try {
      const response = await fetcher("/parents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone_number: phone,
          password,
          username,
          profile_photo: "...",
        }),
      });
      const data = Object.entries(await response.json());
      res.cookie('token' , data[1][1]);

      return res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  },
};
