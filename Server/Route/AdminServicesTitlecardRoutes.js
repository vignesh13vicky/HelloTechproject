const express = require("express");
const router = express.Router();
const cont = require("../Controller/AdminServicesTitlecardController");
router.post("/servicestitlecard",cont.upload, cont.AdminServicesTitlecard,cont.getadminServicesTitlecard);
router.get("/servicestitlecardRead", cont.getadminServicesTitlecardImage);
router.get("/servicestitlecardRead/:id", cont.getadminServicesTitlecardImageOne);
// router.post("/servicestitlecardDelete", cont.DeleteadminServicesTitlecard);
// router.post("/servicestitlecardUpdate", cont.UpdateadminServicesTitlecard);
module.exports = router;
