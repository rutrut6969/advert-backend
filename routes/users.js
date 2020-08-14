import express from 'express';

// Setting up route for the users
const router = express.Router();

// /users Get Request Default url is /api/users defined in index.js
router.get('/', (req, res) => {
  res.send(users);
});
router.post('/', (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

// Exporting the router to be used in index.js
export default router;
