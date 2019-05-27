const router = require("express").Router();

router.use("/subscriber", require("./subscriberController"));

module.exports = router;
