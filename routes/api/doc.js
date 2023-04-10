const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/apiDocController");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.apiDocController));


module.exports = router;