const { Router } = require ("express")
const passportCall = require("../passportJwt/passportCall.js")
const { authorization } = require("../passportJwt/authorization.js")
const ViewsController = require("../controllers/viewsController")
const router = Router()
const viewsController = new ViewsController()

router.get("/login", viewsController.loginView)

router.get("/register", viewsController.registerView)

router.get("/realTimeProducts", viewsController.realTimeProductsView)

router.get("/chat", passportCall("jwt"), authorization("user"),viewsController.chatView)

module.exports = router
