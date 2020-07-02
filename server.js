// Dependencies
const express = require('express');
const app = express();
const mongoose = require(`mongoose`)
const cors = require('cors');

// Global Vars
const PORT = process.env.PORT || 3000
const bookmarkController = require(`./controllers/bookmarks.js`)
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookmarks';

// Database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on(`open`, () => {
    console.log(`Mongo is connected`)
});

// MiddleWare
app.use(cors())
app.use(express.json());
app.use(`/bookmarks`, bookmarkController);

// Routes 
app.get('/' , (req, res) => {
    res.redirect('/bookmarks')
  });

//Listener
app.listen(PORT, ()=> {
    console.log(`I am listening on Port :${PORT} `)
})