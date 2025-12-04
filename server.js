const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// GANTI DENGAN WEBHOOK N8N PUNYAMU
const N8N_WEBHOOK = "http://localhost:5678/webhook/dc9c7d4e-d691-40da-9f38-ab5ffa9f0611";

// Serve halaman HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint WebApp → Kirim ke n8n
app.post("/ask", async (req, res) => {
  try {
    const question = req.body.question;

    const response = await axios.post(N8N_WEBHOOK, { question });

    res.json({
      answer: response.data.answer || "Tidak ada respons dari n8n.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error menghubungi n8n." });
  }
});

// Jalankan server
app.listen(3000, () => {
  console.log("WebApp berjalan di http://localhost:3000");
});
