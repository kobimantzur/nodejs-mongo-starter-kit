const router = require("express").Router();
const subscribers = require("../models/subscriberModel");

router.get('/all', (req, res) => {
  return res.status(200).send("success");
})


module.exports = router;
