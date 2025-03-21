const express = require ("express")
const router = express.Router()
const cont = require ("../Controller/Signupcontroller")

router.post("/signupAdd",cont.newSignupRegistration);
// router.post("/signup/loginAdd", cont.signup);
// router.get("/signup/verify", cont.verify);

// router.post("/logout",cont.logout)

module.exports=router;


