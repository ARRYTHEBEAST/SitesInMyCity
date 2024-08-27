// database user: arjun
// database password: arjun

require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

app.get('/api/markers', async (req, res) => {
  console.log('Received request for /api/markers');
  try {
    const database = client.db('your_database_name');
    console.log('Connected to database');
    const markers = database.collection('markers');
    console.log('Accessing markers collection');
    const result = await markers.find({}).toArray();
    console.log('Fetched markers:', result);
    res.json(result);
  } catch (error) {
    console.error('Error fetching markers:', error);
    res.status(500).json({ error: 'Error fetching markers' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
