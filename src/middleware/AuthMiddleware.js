module.exports = function authMiddle(req, res, next) {
  const user = req.session.user;

  const bypass = req.route.path !== "/edit-profile";

  if (bypass) {
    return next();
  }

  if (!user) {
    return res.redirect("/signup");
  }

  return next();
};
