const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = process.env.DB_NAME 
const app = express()

// Middleware
app.use(bodyparser.json())
app.use(cors({
    origin: true,
    credentials: true,
}))

// Root route to check if API is working
app.get('/', async (req, res) => {
    res.json({ message: 'PassOP Backend API is running!', status: 'success' });
})

// Get all the passwords
app.get('/passwords', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.find({}).toArray();
        res.json(findResult)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch passwords' });
    }
})

// Save a password
app.post('/passwords', async (req, res) => { 
    try {
        const password = req.body
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.insertOne(password);
        res.send({success: true, result: findResult})
    } catch (error) {
        res.status(500).json({ error: 'Failed to save password' });
    }
})

// Delete a password by id
app.delete('/passwords', async (req, res) => { 
    try {
        const password = req.body
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.deleteOne(password);
        res.send({success: true, result: findResult})
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete password' });
    }
})

// For local development
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`)
    })
}

// Export for Vercel
module.exports = app
