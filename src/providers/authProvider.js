module.exports = (req) => {
  return {...req.session.user};
};
