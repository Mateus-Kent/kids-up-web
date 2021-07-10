const express = require("express");

const pageNotFoundMiddleware = require("../middleware/PageNotFoundMiddleware");
const authMiddleware = require("../middleware/AuthMiddleware");

const IndexController = require("../controllers/IndexController");
const AuthController = require("../controllers/AuthController");
const ProfileController = require("../controllers/ProfileController");

const routes = express.Router();

routes.get("/", authMiddleware, IndexController.index);

routes.get("/signup", AuthController.registerView);

routes.post("/signup", AuthController.register);

routes.get("/login", AuthController.loginView);

routes.get("/edit-profile", authMiddleware, ProfileController.editProfileView);

routes.use(pageNotFoundMiddleware);

module.exports = routes;
