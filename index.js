import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

// Initializing App
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/api/users', usersRoutes);
app.listen(PORT, () =>
  console.log('App Listening on port: http://localhost:' + PORT)
);

// Initial Route
app.get('/', (req, res) => res.send('<h1>Hello From Homepage</h1>'));
