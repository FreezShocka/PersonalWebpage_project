const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('usersDatabase.db');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    username TEXT,
    password TEXT
  )
`);

app.post('/api/check-login', (req, res) => {
  const { email, password } = req.body;

  db.get(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else if (row) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: 'Invalid email and password combination' });
      }
    }
  );
});

app.post('/api/register', (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  db.run(
    'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
    [email, username, password],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else {
        res.json({ success: true });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});