const express = require("express");
const routes = express.Router();
const Phone = require("../model/products");
routes.get("/", async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json({
      status: "success",
      results: phones.length,
      data: phones,
    });
  } catch (err) {
    res.json({ message: err });
  }
});
routes.post("/", async (req, res) => {
  const phone = new Phone({
    name: req.body.name,
    phone: req.body.phone,
  });
  try {
    const savedPhone = await phone.save();
    res.status(200).json({
      status: "success",
      data: savedPhone,
    });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = routes;
