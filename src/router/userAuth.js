const express = require("express");
const router = express.Router();
require("../db/conn");
const MenRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingMenRecord = new MenRanking(req.body);
    console.log(req.body);
    await addingMenRecord.save();
  } catch (e) {
    res.send(e);
  }
});
router.get("/mens", async (req, res) => {
  try {
    const getData = await MenRanking.find({});
    
    res.send(getData);
  } catch (e) {
    res.send(e);
  }
});
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await MenRanking.findById(_id);
    res.send(getData);
  } catch (e) {
    res.send(e);
  }
});
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getData);
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;
