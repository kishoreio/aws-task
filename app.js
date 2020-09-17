const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/upload', (req, res) => {
  console.log('called');
});

app.listen(8080, () => {
  console.log('Connected to Port 8080');
});
