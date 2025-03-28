const express = require ("express")
const router = express.Router()
const cont = require ("../Controller/Signupcontroller")

router.post("/signupAdd",cont.newSignupRegistration);
router.post("/signcheck", cont.SignupCheck);
// router.get("/signup/verify", cont.verify);

router.post("/logout",cont.signOut)

module.exports=router;


