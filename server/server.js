import express from 'express';
import sqlite3 from 'sqlite3';
import bodyParser from 'body-parser';
import cors from 'cors';

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
  const { email, username } = req.body;

  db.get(
    'SELECT * FROM users WHERE email = ? AND username = ?',
    [email, username],
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else if (row) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: 'Invalid email and username combination' });
      }
    }
  );
});

app.post('/api/register', (req, res) => {
  const { firstName, lastName, username, email } = req.body;

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

app.listen(5000, () => {console.log("Server started on port 5000")})