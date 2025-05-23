const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { name, password, role } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email, and password tidak boleh kosong !" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    return res.status(201).json({
      message: "User berhasil di tambahkan",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
