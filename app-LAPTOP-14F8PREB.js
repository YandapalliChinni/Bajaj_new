const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const data = req.body;

  if (!data || !data.data) {
    return res.status(400).json({ "is_success": false, "error": "Invalid input" });
  }

  const user_id = "Chinni";
  const email = "chinni_yandapalli@srmap.edu.in";
  const roll_number = "AP21110011409";

  const numbers = data.data.filter(item => !isNaN(item));
  const alphabets = data.data.filter(item => isNaN(item));
  const highest_alphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

  const response = {
    "is_success": true,
    "user_id": user_id,
    "email": email,
    "roll_number": roll_number,
    "numbers": numbers,
    "alphabets": alphabets,
    "highest_alphabet": highest_alphabet
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
