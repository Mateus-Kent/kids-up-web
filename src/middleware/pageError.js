module.exports = (req, res, next) => {
  return res.status(404).render('error')
}