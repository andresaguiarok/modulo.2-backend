const { Router } = require("express")
const passport = require("passport")
const passportCall = require("../passportJwt/passportCall.js")
const { authorization } = require("../passportJwt/authorization.js")
const SessionController = require("../controllers/sessionController.js")
const sessionControler = new SessionController()
const router = Router()

router.post("/register", sessionControler.register)

router.post("/login", sessionControler.login)

router.get("/current", passportCall("jwt"), authorization("user"), sessionControler.infoCurrent)

router.get("/privada", passport.authenticate("jwt",{session:false}), sessionControler.privada)

router.get("/github", passport.authenticate("github", {scope:["user:email"]}), sessionControler.gitHub)

router.get("/githubcall",passport.authenticate("github", {failureRedirect:"/login"}), sessionControler.gitHubCall)

router.get("/logout", passport.authenticate("jwt",{session:false}), sessionControler.logout)

module.exports = router