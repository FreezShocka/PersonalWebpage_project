import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulated database (replace this with an actual database)
const usersDatabase = [
  { email: 'user@example.com', username: 'user1', password: 'password1' },
  // Add more users as needed
];

// Endpoint for handling login submissions
app.post('/api/check-login', (req, res) => {
  const { email, username } = req.body;

  // Check if the email and username combination exists in the simulated database
  const userExists = usersDatabase.some(
    (user) => user.email === email && user.username === username
  );

  if (userExists) {
    // Send a success response to the client
    res.json({ success: true });
  } else {
    // Send a failure response to the client
    res.status(401).json({ success: false, error: 'Invalid email and username combination' });
  }
});

// Endpoint for handling register submissions
app.post('/api/register', (req, res) => {
  const { firstName, lastName, username, email } = req.body;

  // Simulated logic to add the user to the database (replace with actual database logic)
  usersDatabase.push({ firstName, lastName, username, email, password: 'password123' });

  // Send a success response to the client
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.listen(5000, () => {console.log("Server started on port 5000")})