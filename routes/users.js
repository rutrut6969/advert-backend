import express from 'express';

const router = express.Router();

const users = [
  {
    fname: 'John',
    lname: 'Doe',
    age: '25',
  },
  {
    fname: 'Jane',
    lname: 'Doe',
    age: '26',
  },
];

// /users
router.get('/', (req, res) => {
  res.send(users);
});
router.post('/', (req, res) => {
  users.push(req.body);
  res.send(req.body);
});

export default router;
