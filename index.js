const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// GANTI DENGAN WEBHOOK TEST URL MILIKMU
const N8N_WEBHOOK = "http://localhost:5678/webhook-test/dc9c74de-d691-40da-9f38-ab5ffa9f0611";

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await axios.post(N8N_WEBHOOK, {
      question: question,
    });

    res.json({
      answer: response.data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error contacting n8n");
  }
});

app.listen(3000, () => {
  console.log("WebApp running on http://localhost:3000");
});
