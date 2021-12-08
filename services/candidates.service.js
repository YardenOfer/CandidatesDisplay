const express = require("express");
const axios = require("axios");

module.exports = {
  getcandidates: (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let candidates;
    axios
      .get(
        "https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122"
      )
      .then((resp) => {
        candidates = JSON.parse(JSON.stringify(resp.data));
        return res.status(200).json(candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
