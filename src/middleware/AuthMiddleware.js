const jwt = require("jsonwebtoken");

module.exports = async function authMiddle(req, res, next) {
  const { token } = req.cookies;

  const bypass = req.route.path !== "/edit-profile";

  if (bypass) {
    return next();
  }

  if (!token) {
    return res.redirect("/signup");
  }

  try {
    const parent = await jwt.verify(token, "secret");
  } catch (error) {
    res.clearCookie("token");
    return res.redirect("/signup");
  }

  return next();
};
