const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connection string per MongoDB Atlas
const MONGO_URL = 'mongodb+srv://<username>:<password>@<clustername>.<additionalid>.mongodb.net/?retryWrites=true&w=majority';

let db;

MongoClient.connect(MONGO_URL)
  .then(client => {
    db = client.db('react_exercises');
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => console.error('MongoDB connection error:', error));

// GET tutti gli studenti
app.get('/api/students', async (req, res) => {
  const students = await db.collection('students').find().toArray();
  res.json(students);
});

// POST nuovo studente
app.post('/api/students', async (req, res) => {
  const { name } = req.body;
  await db.collection('students').insertOne({ name });
  res.json({ message: 'Studente aggiunto' });
});

app.listen(5000, () => console.log('Server on port 5000'));