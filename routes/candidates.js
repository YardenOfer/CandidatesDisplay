const express = require("express");
const router = express.Router();

const candidatesService = require("../services/candidates.service");

router.get("/", candidatesService.getcandidates);

module.exports = router;
