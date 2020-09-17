const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); //Loading environment variables from env file into process

const app = express();
const awsRouter = require('./aws-upload');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/upload', awsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Connected to Port 8080');
});
